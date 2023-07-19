import { RcsbAbstractDisplay } from "./RcsbAbstractDisplay";
import { Selection, BaseType } from "d3-selection";
import { RcsbFvTrackData, RcsbFvTrackDataElementInterface } from "../../RcsbDataManager/RcsbDataManager";
export declare class RcsbBlockDisplay extends RcsbAbstractDisplay {
    private dx;
    private lines;
    private circles;
    private circleDecorators;
    private lineDecorators;
    private rcsbD3BlockManager;
    enter(e: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    plot(elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    move(): void;
    protected processData(dataElems: RcsbFvTrackData): RcsbFvTrackData;
    private loadDecorators;
    private plotDecorators;
    private removeDecorators;
}
