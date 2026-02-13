/** @type {import('next-sitemap').IConfig} */
const SITE_URL = "https://portocon.com.br"; // Atualizar com URL real

const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalPaths: async (config) => {
    return [
      await config.transform(config, "/", {
        priority: 1,
        changefreq: "weekly",
      }),
      await config.transform(config, "/sobre", {
        priority: 0.9,
        changefreq: "monthly",
      }),
      await config.transform(config, "/abrir-empresa", {
        priority: 0.9,
        changefreq: "monthly",
      }),
      await config.transform(config, "/mudar-de-contador", {
        priority: 0.9,
        changefreq: "monthly",
      }),
    ];
  },
};

module.exports = config;
