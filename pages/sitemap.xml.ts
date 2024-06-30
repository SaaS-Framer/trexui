import { apikeys } from "@/config/apikeys";


function generateSiteMap() {
  return `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <sitemap>
                        <loc>${apikeys.baseUrl}sitemap/1.xml</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                      </sitemap>
          </sitemapindex>`
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: {
  res: any
}) {
  // We make an API call to gather the URLs for our site
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=2000, stale-while-revalidate=5000'
  )

  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default SiteMap;