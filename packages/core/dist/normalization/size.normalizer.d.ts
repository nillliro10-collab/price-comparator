export interface NormalizedSize {
    sizeValue: string | null;
    sizeSystem: string | null;
    sizeLabel: string;
}
export declare function normalizeSize(rawSize: string | null | undefined): NormalizedSize;
