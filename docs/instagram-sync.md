# Instagram 4K Auto Sync Pipeline (Daily)

## Goal
Automate photo ingestion from Instagram into CMS with high quality assets and smart categorization.

## Flow
1. Fetch posts via Instagram Graph API.
2. Keep highest-resolution source image.
3. Generate modern variants (WebP + AVIF).
4. Categorize for story engine (`Preparation`, `Run`, `Community`, `City`, `Night Run`).
5. Upload/update `photo` documents in Sanity.

## Script
Use `scripts/instagram-sync.mjs`.

```bash
node scripts/instagram-sync.mjs
```

## Daily schedule
Run once per day via cron or CI scheduler:

```bash
0 3 * * * cd /workspace/deeneeme && /usr/bin/node scripts/instagram-sync.mjs
```

## Environment variables
- `INSTAGRAM_GRAPH_TOKEN`
- `INSTAGRAM_USER_ID`
- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_WRITE_TOKEN`

## Failsafe
If Instagram API is unavailable, script writes a sample payload and exits cleanly so gallery generation never breaks the site pipeline.
