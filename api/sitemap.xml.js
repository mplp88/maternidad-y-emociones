export default async function handler(req, res) {
  const response = await fetch(`https://maternidad-y-emociones-api.vercel.app/api/blogs`)
  const { blogs } = await response.json()

  const urls = blogs
    .map((post) => {
      return `
      <url>
        <loc>https://maternidadyemociones.com.ar/blog/${post.slug}</loc>
        <lastmod>${new Date(post.updatedAt).toISOString() || new Date(post.createdAt).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
    })
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://maternidadyemociones.com.ar/</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://maternidadyemociones.com.ar/blog</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://maternidadyemociones.com.ar/sobre-mi</loc>
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
    ${urls}
  </urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(sitemap)
}
