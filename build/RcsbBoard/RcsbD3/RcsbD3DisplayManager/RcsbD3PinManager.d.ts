import { Selection, BaseType } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../../RcsbDataManager/RcsbDataManager";
import { RcsbScaleInterface } from "../RcsbD3ScaleFactory";
export interface PlotPinInterface {
    elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>;
    radius: number;
    labelShift: number;
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface;
    height: number;
    color?: string;
    addLine?: boolean;
    addText?: boolean;
}
export interface MovePinInterface {
    labelShift: number;
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface;
    height: number;
    addLine?: boolean;
}
export declare class RcsbD3PinManager {
    private textElements;
    private lineElements;
    private circleElements;
    plot(config: PlotPinInterface): void;
    move(config: MovePinInterface): void;
}
