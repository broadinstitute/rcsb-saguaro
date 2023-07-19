import { RcsbAbstractDisplay } from "./RcsbAbstractDisplay";
import { Selection, BaseType } from "d3-selection";
import { LocationViewInterface } from "../RcsbBoard";
import { RcsbFvTrackDataElementInterface } from "../../RcsbDataManager/RcsbDataManager";
export declare class RcsbSequenceDisplay extends RcsbAbstractDisplay {
    private yScale;
    private intervalRatio;
    private hideFlag;
    private compKey;
    private nonEmptyDisplay;
    private rcsbD3SequenceManager;
    private definedScale;
    setDynamicDisplay(): void;
    setNonEmptyDisplay(flag: boolean): void;
    enter(e: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    _update(where: LocationViewInterface, compKey?: string): void;
    displayEmpty(): void;
    plot(elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>): void;
    move(): void;
    private setScale;
    private plotSequenceLine;
    private rmSequenceLine;
    private checkHideFlag;
    private minIntervalRatio;
    private getSequenceData;
}
