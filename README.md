# Tech Blog Portfolio

A modern frontend-only technical blog built with React, Vite, Tailwind CSS, React Router, Framer Motion, JSON blog storage, and Markdown rendering.

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Add a New Blog

1. Add cover and inline images to `public/images`.
2. Add a new object to `src/data/blogs.json`.
3. Use a unique `slug`; the blog route becomes `/blog/your-slug`.
4. Write article content in Markdown inside the `content` field.
5. Set `"published": true` when the blog is ready.

The homepage automatically sorts posts newest first by `date`.

## Drafts and Private Blogs

For a public Netlify site, only publish blogs you are comfortable sharing.

You can set `"published": false` on a blog object to hide it from the homepage and blog detail route, but this is not secure privacy because frontend-only sites ship their code/data to the browser.

For a blog that should be visible only to you, keep it outside `src/data/blogs.json` until it is ready, or keep it on a private local branch/file and do not deploy it. True private previews require authentication or a CMS/backend.

## Netlify Deployment

1. Push this project to GitHub.
2. Create a new site in Netlify and import the repository.
3. Set the build command to `npm run build`.
4. Set the publish directory to `dist`.
5. Deploy.

`netlify.toml` and `public/_redirects` are included so React Router pages work on direct refresh.
