// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tuncion Docs',
  tagline: '👋 Hi I\'m Tuncion!',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.tuncion.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-DDL45HDGPK',
          anonymizeIP: true,
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },

      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      metadata: [
        { name: 'keywords', content: 'Tuncion, FiveM Helper API, Tuncion XP, VSCode FiveM Pack, FiveM scripts documentation, Tuncion scripts, FiveM addon docs, Tuncion developer docs' },
        { name: 'description', content: 'Official Tuncion documentation covering the FiveM Helper API, Tuncion XP scripting library, and the VSCode FiveM Pack. Guides, reference, installation, usage, and API events for FiveM developers.' },
      ],
      algolia: {
        appId: 'XXX',
        apiKey: 'XXX',
        indexName: 'XXX',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
      },
      image: 'img/og_tuncion.jpg',
      navbar: {
        title: 'Tuncion Docs',
        logo: {
          alt: 'Tuncion Logo',
          src: 'img/tuncion_transparent.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},

          {
            href: 'https://shop.viority.eu/',
            label: '💸 My Store (Viority)',
            position: 'left',
          },

             {
            href: 'https://shop.dream-services.eu/',
            label: '💸 My Store (Dream)',
            position: 'left',
          },

          {
            href: 'https://viority.eu/terms',
            label: 'Terms',
            position: 'right',
          },
          
          {
            href: 'https://viority.eu/privacy',
            label: 'Privacy',
            position: 'right',
          },

          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              // {
              //   to: 'https://my-site.com/help-us-translate',
              //   label: 'Help us translate',
              // },
            ],
          },

          {
            type: 'search',
            position: 'right',
          },

        ],
      },
      // footer: {
      //   style: 'dark',
      //   copyright: `Copyright © ${new Date().getFullYear()} Dream Services`,
      //   links: [
      //     {
      //       title: "Help",
      //       items: [
      //         {
      //           label: "Customer Support",
      //           href: "https://discord.gg/zppUXj4JRm",
      //         },
      //         {
      //           label: "FAQ",
      //           href: "https://docs.dream-services.eu/home/faq",
      //         },
      //         {
      //           label: "Purchase",
      //           href: "https://docs.dream-services.eu/home/purchase",
      //         },
      //         {
      //           label: "Keymaster",
      //           href: "https://docs.dream-services.eu/home/keymaster",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Others",
      //       items: [
      //         {
      //           label: "Terms & Conditions",
      //           href: "https://viority.eu/terms",
      //         },
      //         {
      //           label: "Privacy Policy",
      //           href: "https://viority.eu/privacy",
      //         }
      //       ],
      //     },
      //   ],
      // },
      prism: {
        additionalLanguages: ['lua'],
        theme: prismThemes.github,
        darkTheme: prismThemes.vsDark
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      }
    }),
    headTags: [
      {
        tagName: 'script',
        attributes: { type: 'application/ld+json' },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          name: 'Dream Services',
          url: 'https://docs.dream-services.eu',
          logo: 'https://i.imgur.com/vDc2B6l.png',
        }),
      },

    ]
};

export default config;
