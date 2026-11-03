# Harsh Verma · Video Editor Portfolio

A single-page portfolio for video editor Harsh Verma, built with Next.js and
Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Production build         |
| `npm run start` | Serve the production app |
| `npm run lint`  | Run ESLint               |

## Structure

```
src/
  app/            Layout, page, metadata and global theme tokens
  components/     Page sections and interactive widgets
  data/           Projects, brands, categories and client list
public/avatars/   Brand avatars
```

Projects and brand details live in `src/data/projects.ts` and
`src/data/brands.ts`. Video previews and the player use Google Drive file IDs,
so the Drive files must stay publicly viewable.
