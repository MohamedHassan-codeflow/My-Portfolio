# Mohamed Hassan React Portfolio

Professional portfolio website built with React, Vite, Bootstrap, and Tailwind CSS.

## Sections Included

- Hero / Intro
- About
- Skills
- Projects
- Professional Experience
- Education
- Certifications
- Languages
- Contact
- Download CV button

## Tech Stack

- React.js
- Vite
- Bootstrap 5
- Bootstrap Icons
- Tailwind CSS

## How to Run Locally

Open the project folder in VS Code, then run:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

Important: do not open `index.html` directly by double-clicking it. React/Vite projects must run through the dev server or through a deployed build.

## Build for Deployment

```bash
npm run build
```

The production files will be generated inside the `dist` folder.

## Fix Included for White Screen

This project includes `vite.config.js` with:

```js
base: './'
```

This prevents a white screen when the site is deployed inside a subfolder, such as GitHub Pages.

## Deploy on GitHub Pages

1. Push this project to GitHub.
2. Run `npm run build`.
3. Deploy the `dist` folder using your preferred GitHub Pages method.

## Deploy on Vercel

1. Push this project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Keep the default Vite settings.
5. Click Deploy.


## Enhancement update - navigation, themes, and responsiveness

- Added a fixed top navigation bar with links to Home, About, Skills, Projects, Experience, Certifications, and Contact.
- Added a two-theme selector in the navigation bar: Light and Dark, with the selected theme saved in localStorage.
- Reworked text colors and CSS variables so the white/light theme keeps strong contrast and readability.
- Improved mobile responsiveness so the right-side theme and menu controls stay aligned and do not float freely on small screens.
- Added Vercel live-demo buttons at the end of the project cards where live links are available from GitHub.
- Added project-based Front-End Developer experience.
