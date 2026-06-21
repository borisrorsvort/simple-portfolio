# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bundle install                  # install gems
bundle exec jekyll serve        # local dev server (http://localhost:4000)
bundle exec jekyll build        # production build → _site/
```

No test suite. No linter configured.

## Architecture

Jekyll 4.0.0 static site. Deployed to `rorsvort.com` via GitHub Pages (`gh-pages` branch + `CNAME`). CMS is Forestry.io (`admin/`, `.forestry/`).

### Content model

- **`_projects/`** — Jekyll collection (not posts). Each file has frontmatter: `title`, `date`, `image`, `href`, `categories` (array: `design` | `code` | `teaching`).
- **`_posts/`** — blog articles, auto-assigned `categories: ["blog"]` via `_config.yml` defaults.
- Category pages (`design.html`, `code.html`, `teaching.html`, `articles.html`) filter `site.projects` or `site.posts` by the `categories` frontmatter array.

### Layout chain

`default.html` (shell: GA, footer, `page.background`/`page.color` body classes) → `home.html` / `page.html` / `post.html`

### Styling

Custom utility-first SCSS in `_sass/`, compiled by Jekyll with `jekyll-autoprefixer`. Entry point: `assets/css/main.scss`. Icon font: Fontello (`assets/font/`, `_sass/fontello*.scss`). No JS framework.

### Adding a project

Create `_projects/my-project.md` with frontmatter:

```yaml
---
title: Project Name
date: 2024-01-01 00:00:00 +0000
image: "/assets/images/my-project.png"
href: https://example.com
categories:
- design   # or code / teaching
---
Project description here.
```

The project appears automatically on the matching category page via `_includes/project-preview.html`.
