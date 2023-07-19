import { Selection, BaseType } from "d3-selection";
import { RcsbFvTrackDataElementInterface } from "../../../RcsbDataManager/RcsbDataManager";
import { RcsbScaleInterface } from "../RcsbD3ScaleFactory";
export interface PlotBlockInterface {
    elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>;
    dy: number;
    dx: number;
    y_o: number;
    xScale: RcsbScaleInterface;
    height: number;
    color: string;
}
export interface PlotCircleInterface {
    elements: Selection<SVGGElement, CircleDecoratorInterface, BaseType, undefined>;
    dy: number;
    dx: number;
    xScale: RcsbScaleInterface;
    height: number;
    color: string;
}
export interface PlotLineInterface {
    elements: Selection<SVGGElement, LineDecoratorInterface, BaseType, undefined>;
    dy: number;
    dx: number;
    y_o: number;
    xScale: RcsbScaleInterface;
    height: number;
    color: string;
}
export interface MoveBlockInterface {
    dx: number;
    xScale: RcsbScaleInterface;
    height: number;
}
export interface CircleDecoratorInterface {
    position: number;
    shift: 1 | -1;
    color?: string;
}
export interface LineDecoratorInterface {
    begin: number;
    end: number;
    color?: string;
}
export declare class RcsbD3BlockManager {
    private static readonly minWidth;
    private rectElements;
    private lineElements;
    private circleElements;
    private readonly STROKE_WIDTH;
    plot(config: PlotBlockInterface): void;
    plotDecorators(circles: PlotCircleInterface, lines: PlotLineInterface): void;
    move(config: MoveBlockInterface): void;
    private static getMinWidth;
    private plotCircles;
    private plotLine;
    private moveBlock;
    private moveLine;
    private moveCircle;
}
