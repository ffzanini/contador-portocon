/** @type {import('next-sitemap').IConfig} */
const SITE_URL = "https://www.contabilidadeportocon.com.br";

const config = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: [],
  transform: async (config, path) => {
    const routePriorities = {
      "/": { priority: 1, changefreq: "weekly" },
      "/sobre": { priority: 0.9, changefreq: "monthly" },
      "/abrir-empresa": { priority: 0.9, changefreq: "monthly" },
      "/mudar-de-contador": { priority: 0.9, changefreq: "monthly" },
      "/escritorio": { priority: 0.9, changefreq: "monthly" },
      "/servicos-prestados": { priority: 0.9, changefreq: "monthly" },
    };

    const routeConfig = routePriorities[path] ?? {};

    return {
      loc: path,
      changefreq: routeConfig.changefreq ?? config.changefreq,
      priority: routeConfig.priority ?? config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

module.exports = config;
