# Utsaw Kumar Portfolio

A simple two-page portfolio for web development, systems engineering, and AI/ML research work.


**Live Link - ** itsutsaw.vercel.app

## Preview locally

Run a local server from the project folder:

```bash
python3 -m http.server 8000 --directory dist
```

Then open `http://localhost:8000`.

## Publish updates through GitHub and Vercel

The GitHub repository is connected to Vercel. After editing the portfolio:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will build and publish the new version automatically after the push finishes.

The deployment build copies the static website from `dist/` into the generated `public/` directory. Do not edit `public/`; it is recreated on every build.

## Update portfolio content

Most content is stored in one file:

`dist/assets/js/content.js`

You can update the following arrays without changing the layout:

- `expertise`
- `projects`
- `experience`
- `education`
- `skillGroups`

### Add a project

Copy an existing object inside the `projects` array and edit its values:

```js
{
  id: "unique-project-id",
  title: "Project name",
  category: "web",
  categoryLabel: "Web & SaaS",
  date: "2026",
  description: "A short project description.",
  highlights: ["Feature one", "Feature two"],
  technologies: ["Technology one", "Technology two"],
  github: "https://github.com/username/repository",
  live: "https://project.example.com",
  featured: false,
}
```

Supported project category values are:

- `web`
- `systems`
- `ai-ml`

Set `featured: true` to also show the project on the homepage. Use `null` for a missing GitHub or live-project link.

### Add or update skills

Edit an existing object in `skillGroups`, or add another group:

```js
{
  title: "New skill group",
  items: ["Skill one", "Skill two"]
}
```

### Update About or contact details

The short About and Contact copy is located in `dist/index.html`. Search for `id="about"` or `id="contact"`.

### Replace the resume

Replace this file while keeping the same filename:

`dist/assets/resume/Utsaw_Kumar_Resume.pdf`

Both resume buttons will automatically use the replacement.

## Main files

- `dist/index.html` — homepage structure
- `dist/projects.html` — projects page structure
- `dist/assets/js/content.js` — editable portfolio data
- `dist/assets/js/app.js` — rendering and filter behavior
- `dist/assets/css/styles.css` — design and responsive styling
