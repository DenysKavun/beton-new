/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://beton.monster', // Ваш основной домен
  generateRobotsTxt: true, // Создать заодно и robots.txt
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // Если будут динамические страницы позже
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
