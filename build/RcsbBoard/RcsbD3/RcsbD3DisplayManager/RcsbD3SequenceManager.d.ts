import { Selection, BaseType } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../../RcsbDataManager/RcsbDataManager";
import { RcsbScaleInterface } from "../RcsbD3ScaleFactory";
export interface PlotSequenceInterface {
    elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>;
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface;
    color?: string;
    height: number;
    intervalRatio: [number, number];
}
export interface PlotSequenceLineInterface {
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface;
    g: Selection<SVGGElement, any, null, undefined>;
    height: number;
    color?: string;
}
export interface MoveSequenceInterface {
    xScale: RcsbScaleInterface;
    intervalRatio: [number, number];
}
export declare class RcsbD3SequenceManager {
    private textElements;
    private plotTask;
    plot(config: PlotSequenceInterface): void;
    static plotSequenceLine(config: PlotSequenceLineInterface): void;
    move(config: MoveSequenceInterface): void;
    private static opacity;
}
