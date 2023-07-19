import { Selection, BaseType } from "d3-selection";
import { ScalePoint } from "d3-scale";
import { RcsbFvTrackDataElementInterface } from "../../../RcsbDataManager/RcsbDataManager";
import { RcsbScaleInterface } from "../RcsbD3ScaleFactory";
export interface PlotVariantInterface {
    elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>;
    radius: number;
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface<string, ScalePoint<string>>;
    height: number;
    color?: string;
    trackG: Selection<SVGGElement, any, null, undefined>;
}
export interface MoveVariantInterface {
    elements: Selection<SVGGElement, RcsbFvTrackDataElementInterface, BaseType, undefined>;
    xScale: RcsbScaleInterface;
    yScale: RcsbScaleInterface<string, ScalePoint<string>>;
    height: number;
    trackG: Selection<SVGGElement, any, null, undefined>;
}
export declare class RcsbD3VariantManager {
    private circleElements;
    plot(config: PlotVariantInterface): void;
    move(config: MoveVariantInterface): void;
    private static includeAxis;
}
