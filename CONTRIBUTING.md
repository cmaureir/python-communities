# Contributing

## Add a community

1. Copy `src/content/communities/_base` into a new folder named after your
   community (e.g. `src/content/communities/pybarcelona`).
2. Add an image (logo or photo) next to `index.md`, and fill in the
   frontmatter: `title`, `city`, `country`, `latitude`, `longitude`,
   `category`, `description`, `image`, and optionally `website`.
3. Write a short body below the frontmatter describing the community.
4. Open a pull request. CI will run a build to catch any schema or markup
   errors.

You don't need to be an official representative of a community to submit
it, anyone can add or improve a listing. Please only use logos and
information the community already makes public (their own site, GitHub,
or social media), not copyrighted material you don't have rights to. See
the site's `/legal` page ([source](src/pages/legal.astro)) for how this
content is licensed and attributed.

## Local development

See [README.md](README.md) for setup.
