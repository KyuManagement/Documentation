/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kyu Docs",
  tagline: "Dinosaurs are cool",
  url: "https://docs.kyubot.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/badge/staff.png",

  organizationName: "KyuBot.com",
  projectName: "KyuDocs",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/KSJaay/KyuDocs/pulls/",
        },
        blog: false,
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
        title: "Kyu Docs",
        logo: {
          alt: "KyuBot Logo",
          src: "img/KyuBot.png",
          srcDark: "img/KyuBot.png",
          href: "https://docs.kyubot.com",
          target: "_self",
          width: 32,
          height: 32,
        },
      },
      footer: {
        style: "light",
        copyright: `Copyright © 2023 KyuBot.com ❤️`,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
};

module.exports = config;
