import { restaurants } from "@/data/restaurants";

export const generateSitemap = () => {
  const baseUrl = "https://eatery.ph";
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: "", priority: "1.0", changefreq: "daily" },
    { url: "/restaurants", priority: "0.9", changefreq: "daily" },
    { url: "/locations", priority: "0.8", changefreq: "weekly" },
    { url: "/reviews", priority: "0.8", changefreq: "daily" },
    { url: "/about", priority: "0.6", changefreq: "monthly" }
  ];

  const restaurantPages = restaurants.map(restaurant => ({
    url: `/restaurant/${restaurant.id}`,
    priority: "0.8",
    changefreq: "weekly"
  }));

  const allPages = [...staticPages, ...restaurantPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

Sitemap: https://eatery.ph/sitemap.xml

# Block AI training crawlers
User-agent: CCBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /`;
};