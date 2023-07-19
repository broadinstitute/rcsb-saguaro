export declare class RowStatusMap {
    private readonly rowReadyMap;
    constructor();
    set(key: string, value: boolean): void;
    size(): number;
    clear(rowIds?: string[]): void;
    complete(): boolean;
    completed(): number;
}
