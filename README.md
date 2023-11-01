# Affecture website

Welcome!

This repository hosts the content and the code that make up Affecture's website.

If you need a refresher on some terminology, start [reading here](#glossary).

## Technologies used

- [Astro](https://astro.build/)
- [Markdown](https://www.markdownguide.org/) & [MDX](https://mdxjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Open Graph](https://ogp.me/)
- [Prettier](https://prettier.io/)
- [Tailwind](https://tailwindcss.com/)

## 💻 Commands

All commands are executed from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Install dependencies                             |
| `npm run dev`       | Starts a local dev server at `localhost:4321`    |
| `npm run build`     | Builds the production website into `./dist`      |
| `npm run preview`   | Previews the built website at `localhost:4321`   |
| `npm run test`      | Runs automated tests suites                      |
| `npm run format`    | Runs formatting tools                            |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 📂 Structure

- `/`
  - `public/`: Where non-processed assets live
  - `src/`
    - `assets/`: Assets that can be processed or optimized
    - `components/`: Self-contained elements with semantic meaning, optionally with slots
    - `content/`: Pieces of non-code information
    - `layout/`: Combination of components, helpful to reduce repetition
    - `pages/`: Files that create one or more routes
    - `config.mjs`: Global configuration

## Glossary

### General terminology

- `route`: a webpage address, like "/blog/my-title" or "/"(index)
- `slot`: An element that can be replaced by content at-will
- `assets`: Non-code files that are used in the website, like images and fonts.
