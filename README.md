# Developer Portfolio

A responsive single-page portfolio for a junior MERN Stack Developer, built with React, Vite, Tailwind CSS, Lucide React, and Framer Motion.

## Getting started

Install dependencies once with `npm install`, then run `npm run dev` and open the local URL printed in the terminal. Use `npm run build` to make a production build.

## Project structure

- `src/App.jsx` assembles the page from its sections and shared components.
- `src/main.jsx` mounts the React app into the page and loads the global stylesheet.
- `src/index.css` imports Tailwind CSS and contains small global browser defaults.
- `src/components/` contains reusable UI building blocks such as the navigation, footer, project card, and reveal animation.
- `src/sections/` contains the Hero, About, Skills, Projects, and Contact sections.
- `src/data/portfolio.js` keeps navigation, skills, and project content separate from layout.
- `src/assets/` is for images and other files imported by JavaScript.
- `public/images/` is for static images referenced by URL.
- `index.html` provides the HTML shell and page metadata.
- `vite.config.js` configures Vite's React and Tailwind plugins.
- `package.json` lists project dependencies and common commands.

## Personalize the content

Personal content is stored in `src/data/portfolio.js`. The Country Explorer repository link is an explicit placeholder; replace it with the correct GitHub URL when known. No project screenshots or resume PDF were present. Add the resume as `public/resume.pdf`, then update the resume link in `src/sections/Hero.jsx`; the current button downloads `public/resume-placeholder.txt` with setup instructions.

## Main dependencies

- **React** builds the interface from components.
- **Vite** runs the local development server and creates production builds.
- **Tailwind CSS** provides utility classes for styling without a separate CSS framework configuration.
- **Lucide React** provides reusable SVG icons.
- **Framer Motion** adds animations to React elements.
