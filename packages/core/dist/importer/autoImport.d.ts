import { Store } from "@price-comparator/database/src/index";
export declare function runAutoImport(store: Store): Promise<{
    totalParsed: number;
    processed: number;
    success: number;
    failed: number;
}>;
