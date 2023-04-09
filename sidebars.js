/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "basics/announce",
        "basics/koth",
        "basics/language",
        "basics/multiplier",
        "basics/profile",
        "basics/rewards",
        "basics/voice",
      ],
    },
    {
      type: "category",
      label: "FAQ",
      link: {
        slug: "faq/about",
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "faq/about",
        "faq/badges",
        "faq/debug",
        "faq/import",
        "faq/lootboxes",
        "faq/roadmap",
      ],
    },
    {
      type: "category",
      label: "Changelog",
      link: {
        slug: "update/Cyprus",
        type: "generated-index",
      },
      collapsed: true,
      items: ["updates/cyprus", "updates/birman", "updates/abyssinian"],
    },
  ],
};

module.exports = sidebars;
