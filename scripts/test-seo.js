
const cheerio = require('cheerio');

async function checkSeo() {
  console.log('Testing SEO implementation...');
  const baseUrl = 'http://localhost:3000';

  try {
    // 1. Test Product Page
    console.log('\n--- Testing Product Page ---');
    const productUrl = `${baseUrl}/product/nike-air-force-1`;
    const productRes = await fetch(productUrl);
    
    if (productRes.status === 200) {
      const html = await productRes.text();
      const $ = cheerio.load(html);
      
      const title = $('title').text();
      const description = $('meta[name="description"]').attr('content');
      const canonical = $('link[rel="canonical"]').attr('href');
      const robots = $('meta[name="robots"]').attr('content');
      
      // JSON-LD check
      const jsonLdScripts = $('script[type="application/ld+json"]');
      let jsonLdValid = false;
      let hasAggregateOffer = false;

      jsonLdScripts.each((_, el) => {
        try {
          const data = JSON.parse($(el).html());
          if (data['@type'] === 'Product') {
            jsonLdValid = true;
            if (data.offers && data.offers['@type'] === 'AggregateOffer') {
              hasAggregateOffer = true;
            }
          }
        } catch(e) {}
      });

      console.log(`Title: ${title ? '✅ ' + title : '❌ Missing'}`);
      console.log(`Description: ${description ? '✅ Present' : '❌ Missing'}`);
      console.log(`Canonical: ${canonical ? '✅ ' + canonical : '❌ Missing'}`);
      console.log(`Robots: ${robots || '✅ index (default)'}`);
      console.log(`JSON-LD Product: ${jsonLdValid ? '✅' : '❌'}`);
      console.log(`JSON-LD AggregateOffer: ${hasAggregateOffer ? '✅' : '❌'}`);
      console.log(`SSR Verification (name present): ${html.includes('Nike Air Force 1') ? '✅' : '❌'}`);
    } else {
      console.log(`❌ Failed to fetch product page (HTTP ${productRes.status})`);
    }

    // 2. Test Sitemap
    console.log('\n--- Testing Sitemap ---');
    const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`);
    if (sitemapRes.status === 200) {
      const xml = await sitemapRes.text();
      if (xml.includes('<urlset') && xml.includes('<loc>')) {
        console.log('✅ Sitemap is valid XML');
        
        // Count urls
        const urlCount = (xml.match(/<url>/g) || []).length;
        console.log(`✅ Contains ${urlCount} indexed URLs`);
      } else {
         console.log('❌ Invalid sitemap XML structure');
      }
    } else {
      console.log(`❌ Failed to fetch sitemap (HTTP ${sitemapRes.status})`);
    }

  } catch (error) {
    console.error('❌ Test execution failed. Make sure the server is running on localhost:3000.', error.message);
  }
}

checkSeo();
