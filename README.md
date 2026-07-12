# Boopathi — Java Full-Stack Developer Portfolio

A production-ready personal developer portfolio built with React, Vite, Framer Motion,
and Lucide React. Premium dark engineering aesthetic, fully responsive, and ready to deploy.

## 1. Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── PLACE_RESUME_HERE.txt        ← replace with Boopathi-Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar/        Navbar.jsx, Navbar.css
│   │   ├── Hero/          Hero.jsx, Hero.css
│   │   ├── About/         About.jsx, About.css
│   │   ├── Skills/        Skills.jsx, Skills.css
│   │   ├── Projects/      Projects.jsx, ProjectCard.jsx, Projects.css
│   │   ├── Journey/       Journey.jsx, Journey.css
│   │   ├── GitHubSection/ GitHubSection.jsx, GitHubSection.css
│   │   ├── Contact/       Contact.jsx, Contact.css
│   │   ├── Footer/        Footer.jsx, Footer.css
│   │   └── common/        SectionHeading, TechBadge, Button, SocialLink, AnimatedSection
│   ├── data/               profile.js, skills.js, projects.js, journey.js, socials.js, about.js
│   ├── hooks/              useScrolled.js, useActiveSection.js
│   ├── utils/              contactService.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           global design tokens (colors, spacing, type)
├── index.html               SEO metadata, fonts, favicon
├── vite.config.js
├── vercel.json
├── .env.example
└── package.json
```

## 2. Installation

```bash
npm install
```

## 3. Development

```bash
npm run dev
```

Runs at `http://localhost:5173` by default.

## 4. Production Build

```bash
npm run build
npm run preview   # optional local check of the production build
```

Output is written to `dist/`.

## 5. Placeholders To Replace

All of these live in **`src/data/profile.js`** unless noted otherwise. None of them point to
real accounts — they're deliberately obvious placeholder tokens so nothing gets deployed
pointing at the wrong person's GitHub/LinkedIn by accident.

| Placeholder | Where | Replace with |
|---|---|---|
| `your.email@example.com` | `profile.js` → `email` | Your real email address |
| `your-github-username` | `profile.js` → `github.username` / `github.url` | Your actual GitHub username and profile URL |
| `your-linkedin-username` | `profile.js` → `linkedin.url` | Your actual LinkedIn profile URL |
| `https://your-portfolio-domain.com` | `profile.js` → `portfolioUrl` | Your deployed site URL, once you have one |
| `your-github-username/social-media-platform` | `src/data/projects.js` → `githubUrl` (project 1) | Your real repository URL |
| `liveUrl: null` (project 1) | `src/data/projects.js` | A real deployed URL, if/when this project is live — the "Live Demo" button only renders when this is set |
| `your-github-username/placement-prep-platform` | `src/data/projects.js` → `githubUrl` (project 2) | Your real repository URL once one exists |
| `public/og-image.png` | `public/og-image.png` + `index.html` | A placeholder 1200×630 preview image is included so the tag isn't broken — swap it for a real screenshot/branded image before sharing links publicly |
| Favicon | `public/favicon.svg` | Your own icon, or keep the generated "B." mark |
| Resume file | `public/Boopathi-Resume.pdf` | Your actual resume PDF (see below) |

## 6. Resume File

Place your resume at:

```
public/Boopathi-Resume.pdf
```

The Navbar, Hero, and Contact sections already link to `/Boopathi-Resume.pdf` — no
code changes are needed once the file is added. Delete `public/PLACE_RESUME_HERE.txt`
after adding it.

## 7. Contact Form (EmailJS / Web3Forms)

The contact form works out of the box in a "simulated send" mode — it validates input
and shows success/error states without a backend. To send real emails:

**Option A — Web3Forms (simplest)**
1. Get a free access key at https://web3forms.com
2. Copy `.env.example` to `.env`
3. Set `VITE_WEB3FORMS_ACCESS_KEY=your-key`
4. Restart `npm run dev` — `src/utils/contactService.js` will automatically use it.

**Option B — EmailJS**
1. `npm install @emailjs/browser`
2. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` in `.env`
3. Implement the `emailjs.send(...)` call in the marked section of `contactService.js`

Never commit a real `.env` file — it's already excluded via `.gitignore`.

## 8. Publishing To GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 9. Deploying To Vercel

**Via dashboard:**
1. Push the project to GitHub (see above).
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Add any `.env` variables (e.g. `VITE_WEB3FORMS_ACCESS_KEY`) under Project Settings → Environment Variables.
5. Deploy.

**Via CLI:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

A `vercel.json` is already included with the correct build/output configuration.

## 10. Optional Future Enhancements

- Add a blog or writing section for DSA notes and project write-ups.
- Add light-mode theme toggle (kept out for now to preserve the intended dark engineering identity).
- Add project detail pages (`/projects/:id`) with deeper case studies using React Router.
- Add real GitHub API integration (with a serverless function) instead of third-party stat images.
- Add automated Lighthouse/accessibility CI checks before deployment.
- Add unit tests for the contact form validation logic (e.g. with Vitest).
