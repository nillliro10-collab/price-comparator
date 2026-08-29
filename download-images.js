const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  { file: 'nike-air-force-1-07.png', url: 'https://static.nike.com/a/images/t_default/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-zapatillas-GjGXSP.png' },
  { file: 'nike-dunk-low-retro.png', url: 'https://static.nike.com/a/images/t_default/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-zapatillas-9mNmwG.png' },
  { file: 'adidas-samba-og.jpg', url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Zapatilla_Samba_OG_Blanco_B75806_01_standard.jpg' },
  { file: 'adidas-gazelle.jpg', url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b3bd8118029541578e85a81501254344_9366/Zapatilla_Gazelle_Azul_BB5478_01_standard.jpg' },
  { file: 'new-balance-550.jpg', url: 'https://nb.scene7.com/is/image/NB/bb550wtg_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600' },
  { file: 'nike-air-max-90.png', url: 'https://static.nike.com/a/images/t_default/wzyncuggwyt5bmnw8x1e/air-max-90-zapatillas-2xlndB.png' },
  { file: 'adidas-campus-00s.jpg', url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/25e718b52f6d482daeb7ac520023a8b4_9366/Zapatilla_Campus_00s_Gris_HQ8707_01_standard.jpg' },
  { file: 'new-balance-2002r.jpg', url: 'https://nb.scene7.com/is/image/NB/m2002rca_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600' },
  { file: 'nike-blazer-mid-77.png', url: 'https://static.nike.com/a/images/t_default/b4c4ba65-f12b-426c-9418-4a92cd55160b/blazer-mid-77-vintage-zapatillas-WbvdRq.png' },
  { file: 'adidas-stan-smith.jpg', url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b47d77eba6f945888ceaa8bf0111ced3_9366/Zapatilla_Stan_Smith_Blanco_M20324_01_standard.jpg' }
];

const dir = path.join(__dirname, 'apps/web/public/images/sneakers');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    };
    https.get(url, options, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const img of images) {
    const dest = path.join(dir, img.file);
    console.log(`Downloading ${img.file}...`);
    try {
      await download(img.url, dest);
      console.log(`✅ Success`);
    } catch (e) {
      console.error(`❌ Failed: ${e.message}`);
    }
  }
}

run();
