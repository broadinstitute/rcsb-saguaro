import { Selection } from "d3-selection";
import { Line } from "d3-shape";
import { RcsbFvTrackDataElementInterface } from "../../../RcsbDataManager/RcsbDataManager";
export interface PlotLineInterface {
    points: RcsbFvTrackDataElementInterface[];
    color: string;
    trackG: Selection<SVGGElement, any, null, undefined>;
    line: Line<RcsbFvTrackDataElementInterface>;
    id: string;
}
export interface MoveLineInterface {
    points: RcsbFvTrackDataElementInterface[];
    trackG: Selection<SVGGElement, any, null, undefined>;
    line: Line<RcsbFvTrackDataElementInterface>;
    id: string;
}
export declare class RcsbD3LineManager {
    static plot(config: PlotLineInterface): void;
    static move(config: MoveLineInterface): void;
}
