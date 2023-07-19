import { RcsbBoard } from "../RcsbBoard";
import { RcsbFvTrackDataElementInterface } from "../../RcsbDataManager/RcsbDataManager";
export declare class RcsbD3EventDispatcher {
    private static selectionBegin;
    private static selectionEnd;
    static keepSelectingFlag: boolean;
    private static changeTrackFlag;
    private static operation;
    static elementClick(event: MouseEvent, callback: (d: RcsbFvTrackDataElementInterface, operation: 'set' | 'add', mode: 'select' | 'hover', f: boolean) => void, d: RcsbFvTrackDataElementInterface): void;
    static boardMousedown(event: MouseEvent, board: RcsbBoard): void;
    private static boardMousemove;
    static boardMouseup(event: MouseEvent, board: RcsbBoard): void;
    static leavingTrack(event: MouseEvent, board: RcsbBoard): void;
    static changeTrack(event: MouseEvent, board: RcsbBoard): void;
}
