# Image assets

Real client photos and the logo are wired in and used across the site. Files here:

| File | What | Where it's used |
|---|---|---|
| `logo-lion.png` | Gold lion mark, transparent (extracted from the supplied logo) | Nav + footer (`components/Logo.tsx`) |
| `logo-full.jpg` | Full color logo (lion + wordmark) on white | Reference / light-bg use only |
| `hero-sandiego.jpg` | Marcus DeBose with the San Diego skyline (`DSC_5342`) | Homepage hero + `/san-diego` hero |
| `marcus-debose.jpg` | Professional headshot | `/attorney` bio |
| `story-consultation.jpg` | Client consultation (`MED In the Office`) | Homepage story section |
| `media-dateline.jpg` | Dateline NBC still | `/attorney` media strip |
| `media-nbc.jpg` | NBC News still | `/attorney` media strip |
| `office.jpg` | Office/brand image | JSON-LD `image` (schema) |
| `og-default.jpg` | 1200×630 social-share card | Open Graph (`app/layout.tsx`) |

## Swapping an image
Replace the file (keep the same name) or point the component at a new path. Heroes accept a
`bgImage` prop on `<PageHero>`; the homepage story section takes an `image` prop on
`<StatSplit>`. Keep descriptive, San-Diego / practice-relevant `alt` text on every photo.

Additional supplied source photos (more headshots, courtroom, office building, casual
shots) are not all used — available if you want to swap any in.
