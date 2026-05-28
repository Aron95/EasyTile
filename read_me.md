# EasyTile

A tile-map editor built with Vue 3, TypeScript and Vite. Load a tileset image, pick tiles, and paint them onto a grid to compose a map.

## Requirements

- **Node.js** `^20.19.0` or `>=22.12.0` (see `engines` in `package.json`)
- **npm** (bundled with Node)

Check your versions:

```sh
node -v
npm -v
```

## Getting Started

```sh
# 1. install dependencies
npm install

# 2. start the dev server (with hot reload)
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`). Open it in a Chromium-based browser for the best devtools experience.

## Available Scripts

| Command              | What it does                                             |
| -------------------- | -------------------------------------------------------- |
| `npm run dev`        | Start the Vite dev server with hot module reloading.    |
| `npm run build`      | Type-check (`vue-tsc`) and produce a production build.  |
| `npm run build-only` | Production build without type-checking.                 |
| `npm run type-check` | Run `vue-tsc` over the project without emitting files.  |
| `npm run preview`    | Serve the built `dist/` locally to verify the build.    |

## Project Structure

```
EasyTile/
├── index.html            # Vite entry HTML
├── vite.config.ts        # Vite + Vue plugin configuration
├── tsconfig*.json        # TypeScript project references
├── public/               # Static assets served as-is
└── src/
    ├── main.ts           # App bootstrap (Vue + Pinia)
    ├── App.vue           # Root layout (tool / tileset / tilemap panes)
    ├── components/
    │   ├── grid.vue
    │   ├── tileMapView.vue
    │   ├── tileSetView.vue
    │   └── toolView.vue
    ├── stores/           # Pinia stores
    │   ├── counter.ts
    │   └── currentSelection.ts
    ├── types/            # Shared TS types (tile, tileMap, tileSet)
    ├── utils/            # Helpers: tile-map creation, sprite loading, ids, logger
    └── testData/         # Sample data used during development
```

## Imports & Path Aliases

The `@` alias points to `src/`, configured in `tsconfig.app.json`:

```ts
import { useCurrentSelection } from '@/stores/currentSelection'
// or relative:
import { useCurrentSelection } from '../stores/currentSelection'
```

## Editor Setup

### VS Code (recommended by Vue)
Install the **Vue (Official)** extension (Volar). Disable Vetur if present.

### Sublime Text
Sublime doesn't understand TS/Vue projects on its own. For project-wide autocompletion, jump-to-definition, and `.vue` IntelliSense:

1. Install **Package Control**.
2. Install the packages:
   - `LSP`
   - `LSP-volar` (Vue's official language server, handles `.vue` and `.ts`)
   - `Vue Syntax Highlight` (syntax coloring)
3. Save the folder as a Sublime project (`Project → Save Project As…`) so the language server picks up `tsconfig.app.json`.
4. Restart Sublime. Imports from other files in `src/` should now autocomplete.

### Browser devtools
- [Vue.js devtools (Chrome)](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Vue.js devtools (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## Building for Production

```sh
npm run build
```

The optimised output is written to `dist/`. Preview it locally with:

```sh
npm run preview
```

## Tech Stack

- [Vue 3](https://vuejs.org/) — UI framework (Composition API, `<script setup>`)
- [Pinia](https://pinia.vuejs.org/) — state management
- [TypeScript](https://www.typescriptlang.org/) — typed source
- [Vite](https://vite.dev/) — dev server & bundler
- [vue-tsc](https://github.com/vuejs/language-tools) — type-checking for `.vue` files
