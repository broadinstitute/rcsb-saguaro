import { RcsbAbstractDisplay } from "./RcsbAbstractDisplay";
import { Selection, BaseType } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../RcsbDataManager/RcsbDataManager";
export declare class RcsbVlineDisplay extends RcsbAbstractDisplay {
    private rcsbD3VlineManager;
    enter(e: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    plot(elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    move(): void;
}
