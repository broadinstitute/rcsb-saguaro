import { Subscription } from 'rxjs';
import { RcsbFvTrackData } from "../../RcsbDataManager/RcsbDataManager";
import { RcsbFvBoardFullConfigInterface } from "../RcsbFvBoard/RcsbFvBoard";
/**rxjs Event Handler Object. It allows objects to subscribe methods and then, get(send) events to(from) other objects*/
export declare class RcsbFvContextManager {
    private readonly conditionalFlag;
    private readonly subject;
    /**Call other subscribed methods
     * @param obj Event Data Structure Interface
     * */
    next(obj: RcsbFvContextManagerType): void;
    /**Subscribe method
     * @return Subscription
     * */
    subscribe(f: (x: RcsbFvContextManagerType) => void): Subscription;
    /**Unsubscribe all methods*/
    unsubscribeAll(): void;
    getCondition(flag: CONDITIONAL_FLAG): boolean;
    setCondition(flag: CONDITIONAL_FLAG, value?: boolean): void;
}
export declare enum CONDITIONAL_FLAG {
    STOP_MOUSE_MOVE_HOVERING_HIGHLIGHT = 0
}
/**Event types*/
export declare enum EventType {
    SELECTION = "eventTypeSelection",
    SCALE = "eventTypeScale",
    RESET = "eventTypeReset",
    TRACK_HIDE = "eventTypeHide",
    UPDATE_BOARD_CONFIG = "updateBoardConfig",
    DOMAIN_VIEW = "domainView",
    BOARD_HOVER = "boardHover",
    ROW_READY = "rowReady",
    FRACTION_COMPLETED = "fractionComplete",
    BOARD_READY = "boardReady",
    SET_SELECTION = "eventTypeSetSelection",
    ADD_SELECTION = "eventTypeAddSelection",
    ROW_HOVER = "rowHover"
}
/**Event Data Interface used to change visibility for a particular track*/
export interface TrackVisibilityInterface {
    trackId: string;
    visibility: boolean;
}
/**Event Data Interface used to reset a board row*/
export interface TrackDataInterface {
    trackData: RcsbFvTrackData;
    trackId: string;
    displayId?: string;
}
/**Event Data Interface used to change the board view range*/
export interface DomainViewInterface {
    domain: [number, number];
}
export interface SetSelectionInterface {
    elements: Array<{
        begin: number;
        end?: number;
        isEmpty?: boolean;
    }> | {
        begin: number;
        end?: number;
        isEmpty?: boolean;
    } | null;
    mode: 'select' | 'hover';
}
export interface SelectionInterface {
    trackId: string;
    mode: 'select' | 'hover';
}
export interface RowReadyInterface {
    rowId: string;
    rowNumber: number;
}
export interface MoveTrackInterface {
    oldIndex: number;
    newIndex: number;
}
/**Main Event Data Object Interface*/
export type RcsbFvContextManagerType = {
    eventType: EventType.SELECTION;
    eventResolve?: () => void;
    eventData: SetSelectionInterface;
} | {
    eventType: EventType.DOMAIN_VIEW;
    eventResolve?: () => void;
    eventData: DomainViewInterface;
} | {
    eventType: EventType.SET_SELECTION;
    eventResolve?: () => void;
    eventData: SetSelectionInterface;
} | {
    eventType: EventType.ADD_SELECTION;
    eventResolve?: () => void;
    eventData: SetSelectionInterface;
} | {
    eventType: EventType.RESET;
    eventResolve?: () => void;
    eventData: string;
} | {
    eventType: EventType.UPDATE_BOARD_CONFIG;
    eventResolve?: () => void;
    eventData: Partial<RcsbFvBoardFullConfigInterface>;
} | {
    eventType: EventType.BOARD_READY;
    eventResolve?: () => void;
    eventData: null;
} | {
    eventType: EventType.BOARD_HOVER;
    eventResolve?: () => void;
    eventData: boolean;
} | {
    eventType: EventType.TRACK_HIDE;
    eventResolve?: () => void;
    eventData: TrackVisibilityInterface;
} | {
    eventType: EventType.ROW_HOVER;
    eventResolve?: () => void;
    eventData: string;
} | {
    eventType: EventType.SELECTION;
    eventResolve?: () => void;
    eventData: SelectionInterface;
} | {
    eventType: EventType.SCALE;
    eventResolve?: () => void;
    eventData: string;
} | {
    eventType: EventType.ROW_READY;
    eventResolve?: () => void;
    eventData: RowReadyInterface;
} | {
    eventType: EventType.FRACTION_COMPLETED;
    eventResolve?: () => void;
    eventData: number;
};
