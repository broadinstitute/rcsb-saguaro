import { Selection, BaseType } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../../RcsbDataManager/RcsbDataManager";
import { RcsbScaleInterface } from "../RcsbD3ScaleFactory";
export interface PlotFastSequenceInterface {
    elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>;
    trackG: Selection<SVGGElement, any, null, undefined>;
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface;
    color?: string;
    height: number;
    intervalRatio: [number, number];
    clickCallBack: (event: MouseEvent) => void;
    hoverCallback: (event: MouseEvent) => void;
}
export interface PlotFastSequenceLineInterface {
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface;
    g: Selection<SVGGElement, any, null, undefined>;
    height: number;
    color?: string;
}
export interface MoveFastSequenceInterface {
    xScale: RcsbScaleInterface;
    intervalRatio: [number, number];
}
export declare class RcsbD3FastSequenceManager {
    private textElements;
    private readonly MONOSPACE_BEGIN;
    private readonly FONT_FAMILY;
    plot(config: PlotFastSequenceInterface): void;
    static plotSequenceLine(config: PlotFastSequenceLineInterface): void;
    move(config: MoveFastSequenceInterface): void;
    private static opacity;
    private textLength;
    private textBegin;
}
