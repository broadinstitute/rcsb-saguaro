import { Selection, BaseType } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../../RcsbDataManager/RcsbDataManager";
import { RcsbScaleInterface } from "../RcsbD3ScaleFactory";
export interface PlotBondInterface {
    elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>;
    radius: number;
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface;
    height: number;
    color?: string;
    addLine?: boolean;
}
export interface MoveBondInterface {
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface;
    height: number;
    addLine?: boolean;
}
export declare class RcsbD3BondManager {
    private beginCircleElements;
    private endCircleElements;
    private lineElements;
    plot(config: PlotBondInterface): void;
    move(config: MoveBondInterface): void;
}
