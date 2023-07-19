import { Selection } from "d3-selection";
import { ZoomBehavior, ZoomedElementBaseType } from "d3-zoom";
import { RcsbFvTrackDataElementInterface } from "../../RcsbDataManager/RcsbDataManager";
import { RcsbScaleInterface } from "./RcsbD3ScaleFactory";
export interface SVGConfInterface {
    elementId: string;
    domClass: string;
    svgClass: string;
    width: number;
    pointerEvents: string;
    mouseoutCallBack: Array<() => void>;
    mouseoverCallBack: Array<() => void>;
    mousemoveCallBack: Array<(event: MouseEvent, n: number) => void>;
    xScale: RcsbScaleInterface;
}
export interface MainGConfInterface {
    masterClass: string;
    innerClass: string;
    dblClick: (event: MouseEvent) => void;
    mouseDown: (event: MouseEvent) => void;
    mouseUp: (event: MouseEvent) => void;
    mouseEnter: (event: MouseEvent) => void;
    mouseLeave: (event: MouseEvent) => void;
}
export interface PaneConfInterface {
    paneClass: string;
    bgColor: string;
    elementId: string;
}
export interface TrackConfInterface {
    trackClass: string;
    height: number;
    compositeHeight: number;
    bgColor: string;
}
export interface ZoomConfigInterface {
    zoomEventHandler: ZoomBehavior<ZoomedElementBaseType, any>;
    zoomCallBack: () => void;
}
export interface HighlightRegionInterface {
    trackG: Selection<SVGGElement, any, null, undefined>;
    height: number;
    xScale: RcsbScaleInterface;
    rectClass: string;
    elements: Array<RcsbFvTrackDataElementInterface>;
    color?: string;
}
export interface MoveSelectedRegionInterface {
    trackG: Selection<SVGGElement, any, null, undefined>;
    xScale: RcsbScaleInterface;
    rectClass: string;
}
export declare class RcsbD3Manager {
    private _dom;
    private _svg;
    private _zoomG;
    private _svgG;
    private _pane;
    private _trackHeightPosition;
    private _width;
    svgG(): Selection<SVGGElement, any, null, undefined>;
    zoomG(): Selection<SVGGElement, any, null, undefined>;
    buildSvgNode(config: SVGConfInterface): void;
    addMainG(config: MainGConfInterface): void;
    addPane(config: PaneConfInterface): void;
    getPane(): SVGRectElement;
    resetAllTracks(): void;
    addTrack(config: TrackConfInterface): Selection<SVGGElement, any, null, undefined>;
    setBoardHeight(height: number): void;
    addZoom(config: ZoomConfigInterface): void;
    highlightRegion(hlConfig: HighlightRegionInterface): void;
    moveSelection(config: MoveSelectedRegionInterface): void;
}
