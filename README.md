# ALSANCAK RUNNERS — Urban Running Collective Website

Nike-campaign-inspired Next.js experience for an Izmir-based running collective.

## Stack
- Next.js 14 + TypeScript
- TailwindCSS
- Framer Motion + GSAP-ready motion system
- Sanity content schema stubs

## Start
```bash
npm install
npm run dev
```

## Hızlı Website Önizleme (Dependency gerektirmez)
```bash
python3 -m http.server 4173
# sonra tarayıcıda: http://127.0.0.1:4173/preview/
```

Bu klasör (`preview/`) kullanıcıya anında görsel bir website demosu verir; Next.js uygulaması ise tam üretim yapısıdır.


## Delivery Phases
1. Site architecture + wireframe + component system (`docs/`).
2. Multi-page Next.js experience and reusable components.
3. Motion-ready transitions and cinematic hero.
4. Sanity content models under `sanity/schemas`.
5. Performance-oriented image/video usage and SEO metadata.


## Instagram Auto Sync
- Daily sync scaffold: `scripts/instagram-sync.mjs`
- Documentation: `docs/instagram-sync.md`
- Run manually: `node scripts/instagram-sync.mjs`
