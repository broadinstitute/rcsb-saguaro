import { RcsbAbstractDisplay } from "./RcsbAbstractDisplay";
import { BaseType, Selection } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../RcsbDataManager/RcsbDataManager";
export declare class RcsbBondDisplay extends RcsbAbstractDisplay {
    private yScale;
    private radius;
    private _yDomain;
    private definedScale;
    private rcsbD3BondManager;
    constructor(boardId: string, trackId: string);
    private setScale;
    enter(e: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    plot(elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    move(): void;
}
