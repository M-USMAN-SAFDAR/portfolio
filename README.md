# Muhammad Usman Safdar — Portfolio

Personal portfolio for **Muhammad Usman Safdar**, a full stack developer building web and mobile applications. The site uses a responsive black-and-white visual system to present my work, skills, background, and contact details.

## Highlights

- Responsive portfolio with a fixed monochrome theme
- Animated hero and project sections with GSAP and Three.js
- Project details, technology tags, and links to live work
- Skills grouped by frontend, backend and database, and tools
- Downloadable CV and contact form
- Compressed WebP imagery with lazy-loaded project previews
- Three.js hero visuals loaded after user interaction
- Netlify SPA fallback configured for client-side routes

## Built with

- [Vue 3](https://vuejs.org/) and [Vue Router](https://router.vuejs.org/)
- [Vite](https://vite.dev/) for development and production builds
- [Tailwind CSS 4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) with ScrollTrigger
- [Three.js](https://threejs.org/) for interactive 3D visuals
- [Lucide Vue](https://lucide.dev/) for icons

## Featured projects

| Project | Overview | Built with | Link |
| --- | --- | --- | --- |
| HR Management App | Employee management and organizational workflows with interactive dashboards. | MongoDB, Express, React, Node.js | [Open project](https://hr-managementt.vercel.app/) |
| Luxe Grooming | Salon booking and management with appointment scheduling and an admin dashboard. | React, Tailwind CSS, Express, MongoDB, Node.js | [Open project](https://luxehairsaloon.vercel.app/) |
| Dispatch by RIO | Dispatch website for owner-operators and growing fleets. | React, GSAP, Three.js | [Open project](https://dispatchbyrio.com/) |

## Run locally

Requires Node.js and npm.

```bash
git clone https://github.com/M-USMAN-SAFDAR/portfolio.git
cd portfolio
npm ci
npm run dev
```

Vite prints the local development URL after startup.

## Build and preview

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. The included `netlify.toml` publishes that folder and routes app paths back to `index.html`.

## Project structure

```text
public/                 CV, profile photo, and project images
src/components/         Reusable visual and interaction components
src/data/portfolioData.js  Profile, projects, skills, and services
src/views/               Home, skills, experience, contact, and FAQ pages
src/stores/themeStore.js  Fixed dark monochrome theme
src/style.css            Global design tokens and styles
```

## Personalize the content

- Update profile details, project entries, skills, services, and social links in `src/data/portfolioData.js`.
- Replace the CV and images in `public/`, keeping their paths in sync with the data.
- Update the contact form endpoint in `portfolioData.js` if using a different Formspree form.
- Adjust colors and typography in `src/style.css`.

## Contact

- **Email:** [usmansafdar12535@gmail.com](mailto:usmansafdar12535@gmail.com)
- **GitHub:** [M-USMAN-SAFDAR](https://github.com/M-USMAN-SAFDAR)
- **LinkedIn:** [usmansafdar2025](https://www.linkedin.com/in/usmansafdar2025)
- **X:** [@oiiUsman](https://x.com/oiiUsman)

---

Designed and built by **Muhammad Usman Safdar**.
