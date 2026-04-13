import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://studentalliancellp.com";

  const urls = [
    { path: "", priority: "1.0" }, // homepage
    { path: "about", priority: "0.9" },
    { path: "blog", priority: "0.9" },
    { path: "getintouch", priority: "0.9" },
    { path: "franchise", priority: "0.8" },
    { path: "shop1", priority: "0.8" },
    { path: "gallery", priority: "0.8" },
    { path: "resources", priority: "0.8" },
    { path: "testimonial", priority: "0.7" },
    { path: "kits", priority: "0.7" },
    { path: "practice", priority: "0.7" },
    { path: "printer", priority: "0.7" },
    // Blog detail pages
    { path: "blog-d1", priority: "0.6" },
    { path: "blog-d2", priority: "0.6" },
    { path: "blog-d3", priority: "0.6" },
    { path: "blog-d4", priority: "0.6" },
    { path: "blog-d5", priority: "0.6" },
    { path: "blog-d6", priority: "0.6" },
    { path: "blog-d7", priority: "0.6" },
    { path: "blog-d8", priority: "0.6" },
    { path: "blog-d9", priority: "0.6" },
    { path: "blog-d10", priority: "0.6" },
    { path: "blog-d11", priority: "0.6" },
    { path: "blog-d12", priority: "0.6" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, priority }) => `
  <url>
    <loc>${baseUrl}/${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
