import { RcsbFvRowConfigInterface, RcsbFvRowPublicConfigType } from "../../RcsbFvConfig/RcsbFvConfigInterface";
import { RcsbFvContextManager, TrackDataInterface, TrackVisibilityInterface } from "../../RcsbFvContextManager/RcsbFvContextManager";
export interface RcsbFvExtendedRowConfigInterface extends RcsbFvRowConfigInterface {
    key: string;
    renderSchedule?: "async" | "sync" | "fixed";
    innerTrackId: string;
}
export declare class BoardDataState {
    private rowConfigData;
    private readonly rowStatusMap;
    private readonly contextManager;
    private readonly subscription;
    constructor(contextManager: RcsbFvContextManager, rowConfigData?: RcsbFvRowPublicConfigType[]);
    getBoardData(): RcsbFvExtendedRowConfigInterface[];
    setBoardData(rowConfigData: RcsbFvRowPublicConfigType[]): void;
    refresh(): void;
    /**Adds a new track to the board
     * @param configRow Track configuration object
     * */
    addTrack(configRow: RcsbFvRowPublicConfigType): void;
    /**Modifies visibility of a board track
     * @param obj Target track id and visibility flag (true/false)
     * */
    changeTrackVisibility(obj: TrackVisibilityInterface): void;
    moveTrack(move: {
        oldIndex: number;
        newIndex: number;
    }): void;
    /**Replace board track rack data
     * @param obj New track data and target track id
     * */
    updateTrackData(obj: TrackDataInterface): void;
    /**Add new data to a given board track
     * @param obj Additional track data and target track id
     * */
    addTrackData(obj: TrackDataInterface): void;
    /**Rerender the board track
     * @param trackId Id that identifies the track
     * */
    resetTrack(trackId: string): void;
    unsubscribe(): void;
    /**Modifies a board track data
     * @param obj Additional track data and target track id
     * @param flag Replace track data or add data to the current one
     * */
    private changeTrackData;
    private checkRow;
    private static generateKey;
    private subscribe;
    /**Row Track Board Ready Event
     * @param rowData
     * */
    private rowReady;
    private boardReady;
}
