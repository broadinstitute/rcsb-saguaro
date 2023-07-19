import { Selection, BaseType } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../../RcsbDataManager/RcsbDataManager";
import { RcsbScaleInterface } from "../RcsbD3ScaleFactory";
export interface PlotVlineInterface {
    elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>;
    xScale: RcsbScaleInterface;
    color?: string;
    height: number;
}
export interface MoveVlineInterface {
    xScale: RcsbScaleInterface;
}
export declare class RcsbD3VlineManager {
    private lineElements;
    plot(config: PlotVlineInterface): void;
    move(config: MoveVlineInterface): void;
}
