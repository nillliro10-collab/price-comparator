export class ZalandoAffiliateConnector {
  static async fetchFeed(): Promise<any[]> {
    // Simulamos un feed CSV descargado desde una red de afiliación (Awin)
    // El formato no se parece en nada a Foot Locker, lo cual prueba nuestra normalización.
    return [
      {
        awin_id: "ZAL-10001",
        ean: "0194502390111", // Mismo EAN que la AF1 07 en Foot Locker (simulado)
        product_title: "Zapatillas Nike Sportswear AIR FORCE 1 '07 - Triple White",
        brand_name: "Nike Sportswear",
        color_description: "white/white",
        size_eu: "42",
        current_price: "119.95",
        delivery_cost: "0.00",
        stock_status: "in stock",
        deep_link: "https://awin.com/tracking?id=zalando123",
      },
      {
        awin_id: "ZAL-10002",
        ean: "0886737523294", // Modelo conflictivo
        product_title: "Nike AIR FORCE 1 SHADOW - Zapatillas",
        brand_name: "Nike",
        color_description: "pastel",
        size_eu: "39",
        current_price: "129.99",
        delivery_cost: "4.99",
        stock_status: "in stock",
        deep_link: "https://awin.com/tracking?id=zalando124",
      },
      {
        awin_id: "ZAL-10003",
        ean: "",
        mpn: "SAMBA-OG-BLK",
        product_title: "adidas Originals SAMBA OG UNISEX",
        brand_name: "adidas Originals",
        color_description: "core black",
        size_eu: "43",
        current_price: "115.00",
        delivery_cost: "0.00",
        stock_status: "in stock",
        deep_link: "https://awin.com/tracking?id=zalando125",
      }
    ];
  }

  static async ingest() {
    const feed = await this.fetchFeed();
    const rawOffers = [];

    // Transform API format to RawOffer format
    for (const item of feed) {
      rawOffers.push({
        externalId: item.awin_id,
        externalVariantId: item.size_eu,
        rawTitle: item.product_title,
        rawBrand: item.brand_name,
        rawColor: item.color_description,
        rawSize: item.size_eu,
        rawGtin: item.ean || null,
        rawMpn: item.mpn || null,
        url: item.deep_link,
        price: parseFloat(item.current_price),
        shipping: parseFloat(item.delivery_cost),
        stock: item.stock_status,
      });
    }

    return rawOffers;
  }
}
