import { RcsbAbstractDisplay } from "./RcsbAbstractDisplay";
import { BaseType, Selection } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../RcsbDataManager/RcsbDataManager";
export declare class RcsbVariantDisplay extends RcsbAbstractDisplay {
    private aaList;
    private yScale;
    private radius;
    private definedScale;
    private rcsbD3VariantManager;
    private setScale;
    plot(elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    move(): void;
}
