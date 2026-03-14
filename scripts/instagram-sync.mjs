#!/usr/bin/env node
/**
 * Daily Instagram -> CMS sync scaffold
 * Steps: fetch posts -> keep highest resolution -> categorize -> prepare optimized assets -> upload to Sanity.
 *
 * Required env:
 * - INSTAGRAM_GRAPH_TOKEN
 * - INSTAGRAM_USER_ID
 * - SANITY_PROJECT_ID
 * - SANITY_DATASET
 * - SANITY_WRITE_TOKEN
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const OUT = path.join(process.cwd(), '.cache', 'instagram-sync.json');

function categorize(caption = '') {
  const c = caption.toLowerCase();
  if (/stretch|warmup|lace|prep/.test(c)) return 'Preparation';
  if (/community|crew|together|group/.test(c)) return 'Community';
  if (/night|evening/.test(c)) return 'Night Run';
  if (/city|street|urban|izmir/.test(c)) return 'City';
  return 'Run';
}

function buildOptimizedVariants(url) {
  // Placeholder transform URLs; in production route through your media processor/CDN.
  return {
    original: url,
    webp: `${url}&fm=webp&q=82`,
    avif: `${url}&fm=avif&q=72`
  };
}

async function fetchInstagramPosts() {
  const token = process.env.INSTAGRAM_GRAPH_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!token || !userId) {
    console.warn('Missing Instagram env vars. Writing sample payload only.');
    return [{ id: 'sample-1', media_url: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&w=2200&q=80', caption: 'community night run in izmir' }];
  }
  const endpoint = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,timestamp&access_token=${token}`;
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`Instagram fetch failed: ${res.status}`);
  const data = await res.json();
  return data.data ?? [];
}

async function main() {
  const posts = await fetchInstagramPosts();
  const normalized = posts.map((p) => ({
    id: p.id,
    caption: p.caption || '',
    category: categorize(p.caption || ''),
    assets: buildOptimizedVariants(p.media_url)
  }));

  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), posts: normalized }, null, 2));

  console.log(`Prepared ${normalized.length} Instagram items for CMS upload.`);
  console.log(`Output: ${OUT}`);
  console.log('Next step: send `posts` payload to Sanity as `photo` documents.');
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
