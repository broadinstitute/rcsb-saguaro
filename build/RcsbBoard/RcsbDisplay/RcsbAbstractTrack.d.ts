import { RcsbD3Manager } from "../RcsbD3/RcsbD3Manager";
import { Selection } from "d3-selection";
import { RcsbFvTrackData, RcsbFvTrackDataElementInterface, RcsbFvTrackDataMap } from "../../RcsbDataManager/RcsbDataManager";
import { RcsbFvContextManager } from "../../RcsbFv/RcsbFvContextManager/RcsbFvContextManager";
import { LocationViewInterface } from "../RcsbBoard";
import { RcsbScaleInterface } from "../RcsbD3/RcsbD3ScaleFactory";
export declare abstract class RcsbAbstractTrack {
    protected d3Manager: RcsbD3Manager;
    protected contextManager: RcsbFvContextManager;
    private _bgColor;
    private _height;
    private _width;
    private _data;
    protected updateDataOnMove: (d: LocationViewInterface) => Promise<RcsbFvTrackData>;
    protected xScale: RcsbScaleInterface;
    protected g: Selection<SVGGElement, any, null, undefined>;
    private boardHighlight;
    mouseoutCallBack: () => void;
    mouseoverCallBack: () => void;
    mousemoveCallBack: (event: MouseEvent, n: number) => void;
    private dataUpdatedFlag;
    height(h?: number): number;
    trackColor(c?: string): string;
    init(width: number, scale: RcsbScaleInterface, compositeFlag?: boolean, compositeHeight?: number): void;
    data(d?: RcsbFvTrackData | RcsbFvTrackDataMap): RcsbFvTrackData;
    protected setDataUpdated(flag: boolean): void;
    protected isDataUpdated(): boolean;
    setUpdateDataOnMove(f: (d: LocationViewInterface) => Promise<RcsbFvTrackData>): void;
    setBoardHighlight(f: (d: RcsbFvTrackDataElementInterface, operation: 'set' | 'add', mode: 'select' | 'hover', propFlag?: boolean) => void): void;
    protected getBoardHighlight(): (d: RcsbFvTrackDataElementInterface, operation: 'set' | 'add', mode: 'select' | 'hover', propFlag?: boolean) => void;
    setManagers(d3Manager: RcsbD3Manager, contextManager: RcsbFvContextManager): void;
    highlightRegion(d: Array<RcsbFvTrackDataElementInterface> | null, options?: {
        color?: string;
        rectClass?: string;
    }): void;
    moveSelection(mode: 'select' | 'hover'): void;
}
