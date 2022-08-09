const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kyu Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://kyubot.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'ksjaay',
  projectName: 'KyuDocs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/KSJaay/KyuDocs/pulls/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Kyu Docs',
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} KyuBot, Inc. Built with Docusaurus.`
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      prism: {
        theme: darkCodeTheme
      },
    }),
};

module.exports = config;
