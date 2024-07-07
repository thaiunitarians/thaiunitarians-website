# Welcome to Blogsmith Pro!

1. To get started, first install all necessary packages with `npm install`, then run an initial build to make sure the setup works `npm run build`.
2. Copy the Pagefind build (for site search) to be available for the dev environment. This varies depending on your OS. I've created a few NPM commands to help.
   - For Windows, run `npm run winsearch`
   - For OSX or Linux, run `npm run osxsearch`
3. Finally, start the dev server with `npm run dev` to verify the initial setup.
4. Next, you'll want to configure your site i18n setup (one language, or multiple). Follow instructions in the [i18n documentation](https://cosmicthemes.com/i18n/).
5. Now you can setup the site to your liking!
   - [Style customization](https://cosmicthemes.com/docs/styles/)
   - [Content editing](https://cosmicthemes.com/docs/content/)
   - [Animations](https://cosmicthemes.com/docs/animations/)
   - [Keystatic CMS](https://cosmicthemes.com/docs/keystatic/)
   - [Forms](https://cosmicthemes.com/docs/contact-form/)

Should you need any assistance, send me a message at support@cosmicthemes.com

## Code Intro

I have created a few code tours to introduce you to the codebase. You will need the extension [Code Tour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour) to view them in VSCode.

The source files have the following setup. Note that not all files are included - it is already long, no one wants it to be longer.

```
.
├── .tours/
│   └── code-intro.tour
├── .vscode/
│   └── extensions.json
├── public/
│   ├── favicons/
│   │   └── favicon.ico
│   ├── images/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── site-logo.png
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.astro
│   │   │   ├── HeroImage.astro
│   │   │   └── HeroWave.astro
│   │   └── Footer/
│   │       └── Footer.astro
│   ├── config/
│   │   └── navData.json.ts
│   ├── content/
│   │   ├── authors/
│   │   ├── blog/
│   │   ├── otherPages/
│   │   └── config.ts
│   ├── js/
│   │   └── utils.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── [...page].astro
│   │   │   └── [...slug].astro
│   │   ├── categories/
│   │   │   ├── [category]/
│   │   │   │   └── [...page].astro
│   │   │   └── index.astro
│   │   ├── tags/
│   │   │   ├── [tag]/
│   │   │   │   └── [...page].astro
│   │   │   └── index.astro
│   │   ├── [page].astro
│   │   ├── 404.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── rss.xml.ts
│   └── styles/
│       └── global.scss
├── .gitignore
├── .prettierrc.mjs
├── astro.config.mjs
├── keystatic.config.tsx
├── netlify.toml
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.cjs
└── tsconfig.json
```

For robots like Google to see the correct sitemap, you will want to edit the `public/robots.txt` file to use your website domain.

## Other Resources

- See my blog post on [recommended Astro web development setup](https://cosmicthemes.com/blog/astro-web-development-setup/).
- You can learn more information from the [theme docs](https://cosmicthemes.com/docs/) page on the [Cosmic Themes Website](https://cosmicthemes.com/).
- For support, see the [support page](https://cosmicthemes.com/support/).
- [License details](https://cosmicthemes.com/license/)

## General Astro Info

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory. I also frequently use `src/assets` for images when using Astro asssets for image optimization.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check out the [Astro documentation](https://docs.astro.build).
