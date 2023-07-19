import { Selection } from "d3-selection";
import { Area } from "d3-shape";
import { RcsbFvTrackDataElementInterface } from "../../../RcsbDataManager/RcsbDataManager";
export interface ClearAreaInterface {
    trackG: Selection<SVGGElement, any, null, undefined>;
}
export interface PlotAreaInterface {
    points: RcsbFvTrackDataElementInterface[];
    color: string;
    trackG: Selection<SVGGElement, any, null, undefined>;
    area: Area<RcsbFvTrackDataElementInterface>;
    id: string;
    clickCallBack: (event: MouseEvent) => void;
    hoverCallback: (event: MouseEvent) => void;
    opacity?: number;
}
export interface MoveAreaInterface {
    points: RcsbFvTrackDataElementInterface[];
    trackG: Selection<SVGGElement, any, null, undefined>;
    area: Area<RcsbFvTrackDataElementInterface>;
    id: string;
}
export interface PlotAxisInterface {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    trackG: Selection<SVGGElement, any, null, undefined>;
}
export declare class RcsbD3AreaManager {
    private areaMap;
    plot(multiConfig: Array<PlotAreaInterface>): void;
    plotAxis(config: PlotAxisInterface): void;
    move(config: MoveAreaInterface): void;
}
