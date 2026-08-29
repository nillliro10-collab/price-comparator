import Papa from "papaparse";
export declare function parseCsv(text: string): {
    valid: {
        externalId: string;
        name: string;
        brand: string;
        price: number;
        shipping: number;
        productUrl: string;
        size: string;
        stock: number;
        imageUrl?: string | undefined;
        color?: string | undefined;
        ean?: string | undefined;
        sku?: string | undefined;
    }[];
    failed: {
        row: any;
        error: string;
    }[];
    errors: Papa.ParseError[];
};
