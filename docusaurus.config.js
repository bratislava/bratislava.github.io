// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bratislava Documentation",
  tagline:
    "Documentation page for open-source projects maintained by the Department of Innovation and Technology of Bratislava",
  url: "https://bratislava.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: "bratislava.github.io",
  organizationName: "bratislava",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/bratislava/bratislava.github.io/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/bratislava/bratislava.github.io/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "BA Docs",
        logo: {
          alt: "Bratislava logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Documentation",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/bratislava",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Documentation",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Documentation",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: "Links",
            items: [
              {
                label: "Documentation",
                to: "/docs/introduction",
              },
              {
                label: "GitHub",
                href: "https://github.com/bratislava",
              },
              {
                label: "Innovations Team",
                href: "https://github.com/facebook/docusaurus",
              },
              {
                label: "Bratislava official page",
                href: "https://bratislava.sk",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Department of Innovation and Technology of Bratislava. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
