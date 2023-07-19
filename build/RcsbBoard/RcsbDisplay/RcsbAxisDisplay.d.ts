import { RcsbAbstractDisplay } from "./RcsbAbstractDisplay";
export declare class RcsbAxisDisplay extends RcsbAbstractDisplay {
    private xAxis;
    private readonly length;
    constructor(boardId: string, trackId: string, length?: number);
    reset(): void;
    update(): void;
    move(): void;
}
