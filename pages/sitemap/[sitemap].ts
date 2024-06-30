import { apikeys } from "@/config/apikeys";
type Link = {
    _id: string,
    updatedAt: string,
}
const perPage = 12;
function generateSiteMap(components: Link[], categories: any) {
    return `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${components
            .map((e: Link) => {
                return `<url>
                                    <loc>${apikeys.baseUrl}components/${e._id}</loc>
                                    <lastmod>${e.updatedAt}</lastmod>
                                </url>`
            }).join('')
        }
                ${categories
            .map((category: any) => {
                return new Array(Math.ceil(category.count / perPage)).fill("").map((item, index) => {
                    const page = index + 1;
                    return `<url>
                    <loc>${apikeys.baseUrl}components/category/${category.category.toLowerCase()}/${page}</loc>
                </url>`
                }).join('')
            }).join('')
        }
        <url>
                    <loc>https://www.trexui.com/</loc>
<lastmod>${new Date().toISOString()}</lastmod>
                </url>
        <url>
                    <loc>https://www.trexui.com/components/category/all</loc>
<lastmod>${new Date().toISOString()}</lastmod>
                </url>
        <url>
                    <loc>https://www.trexui.com/blog</loc>
<lastmod>${new Date().toISOString()}</lastmod>
                </url>
                </urlset>`;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res, params }: {
    res: any,
    params: any
}) {
    // We make an API call to gather the URLs for our site
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=2000, stale-while-revalidate=5000'
    )

    const componentsres = await fetch(`${apikeys.apiUrl}componentsitemap`);
    const components = await componentsres.json();
    const categoriesres = await fetch(`${apikeys.apiUrl}componentscategories`);
    const categories = await categoriesres.json();
    console.log(categories.map((e: any) => e.categories.map((e: any) => e)).flat());

    const sitemap = generateSiteMap(components, categories.map((e: any) => e.categories.map((e: any) => e)).flat());

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
    return {
        props: {},
    };
}

export default SiteMap;