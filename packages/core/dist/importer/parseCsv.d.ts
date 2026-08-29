import Papa from "papaparse";
export declare function parseCsv(text: string): {
    valid: any[];
    failed: any[];
    errors: Papa.ParseError[];
};
