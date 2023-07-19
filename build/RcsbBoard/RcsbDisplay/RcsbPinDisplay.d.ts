import { RcsbAbstractDisplay } from "./RcsbAbstractDisplay";
import { BaseType, Selection } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../RcsbDataManager/RcsbDataManager";
export declare class RcsbPinDisplay extends RcsbAbstractDisplay {
    private yScale;
    private radius;
    private labelShift;
    private _yDomain;
    private definedScale;
    private rcsbD3PinManager;
    yDomain(domain: [number, number]): void;
    private setScale;
    enter(e: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    plot(elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    move(): void;
}
