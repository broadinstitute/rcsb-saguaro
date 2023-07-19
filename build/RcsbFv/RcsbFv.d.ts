import { RcsbFvBoardConfigInterface, RcsbFvRowPublicConfigType } from "./RcsbFvConfig/RcsbFvConfigInterface";
import { TrackVisibilityInterface, SetSelectionInterface } from "./RcsbFvContextManager/RcsbFvContextManager";
import { RcsbFvTrackData } from "../RcsbDataManager/RcsbDataManager";
import { SelectionInterface } from "../RcsbBoard/RcsbSelection";
/**
 * Protein Feature Viewer (PFV) constructor interface
 */
export interface RcsbFvInterface {
    /**Array of configurations for each board track*/
    readonly rowConfigData: RcsbFvRowPublicConfigType[];
    /**Board global configuration*/
    readonly boardConfigData: RcsbFvBoardConfigInterface;
    /**DOM element Id where the PFV will be rendered*/
    readonly elementId: string;
}
/**
 * Protein Feature Viewer entry point
 */
export declare class RcsbFv {
    /**rxjs event based handler used to communicate events (click, highlight, move) between board tracks*/
    private readonly contextManager;
    /**Global board configuration*/
    private boardConfigData;
    /**DOM elemnt id where the board will be displayed*/
    private readonly elementId;
    /**Flag indicating that the React component has been mounted*/
    private mounted;
    /**Global d3 Xscale object shared among all board tracks*/
    private readonly xScale;
    /**Global selection shared among all tracks*/
    private readonly selection;
    private readonly boardId;
    private readonly boardDataSate;
    private readonly rcsbFvStateManager;
    private rcsbFvPromise;
    private reactRoot;
    constructor(props: RcsbFvInterface);
    /**
    * Loads the configuration for each row of the board
    * @param rowConfigData Array of configurations for each row in the board
    */
    setBoardData(rowConfigData: RcsbFvInterface["rowConfigData"]): Promise<void>;
    /**
     * Gets the configuration for each row of the board
     */
    getBoardData(): RcsbFvRowPublicConfigType[];
    /**
     * Loads the configuration of the board
     * @param config Configuration of the board
     */
    setBoardConfig(config: RcsbFvBoardConfigInterface): Promise<void>;
    /**
     * @return board configuration
     */
    getBoardConfig(): RcsbFvBoardConfigInterface;
    then(f: () => void): RcsbFv;
    catch(f: () => void): RcsbFv;
    /**Renders the board*/
    init(): Promise<void>;
    /**Unmount the board*/
    unmount(): void;
    /**Returns all track Ids in the same order that are visualised in the board*/
    getTrackIds(): string[];
    /**Adds new annotations for a particular board track
     * @param trackId Id that identifies the track
     * @param trackData Annotations to be added in the track
     * */
    addTrackData(trackId: string, trackData: RcsbFvTrackData): Promise<void>;
    /**Replaces annotations a particular board track
     * @param trackId Id that identifies the track
     * @param trackData New annotations to be displayed
     * */
    updateTrackData(trackId: string, trackData: RcsbFvTrackData): Promise<void>;
    /**Method used to update board global and all-tracks configuration
     * @param newConfig New board configuration data
     * */
    updateBoardConfig(newConfig: {
        boardConfigData?: RcsbFvBoardConfigInterface;
        rowConfigData?: RcsbFvInterface["rowConfigData"];
    }): Promise<void>;
    /**Rerender the board track
     * @param trackId Id that identifies the track
     * */
    resetTrack(trackId: string): Promise<void>;
    /**Adds a new track to the board
     * @param trackConfig Track configuration data
     * */
    addTrack(trackConfig: RcsbFvRowPublicConfigType): Promise<void>;
    /**Changes track visibility (true/false)
     * @param obj Track visibility event data
     **/
    changeTrackVisibility(obj: TrackVisibilityInterface): Promise<void>;
    /**Change board view range
     * @param domain new xScale domain
     **/
    setDomain(domain: [number, number]): void;
    /**Get board view range
     **/
    getDomain(): [number, number];
    /**Select board range
     * @param selection region/elements
     **/
    setSelection(selection: SetSelectionInterface): void;
    /**Get selected board ranges
     * @param mode selection type
     **/
    getSelection(mode: "select" | "hover"): SelectionInterface[];
    /**Add selection to board
     * @param selection region/elements
     **/
    addSelection(selection: SetSelectionInterface): void;
    /**
     * Clear Selection
     **/
    clearSelection(mode?: 'select' | 'hover'): void;
    /**
     * Move board track
     * @param oldIndex original position
     * @param newIndex new position
     * **/
    moveTrack(oldIndex: number, newIndex: number): Promise<void>;
    /**
     * reset Selection and Scale
     **/
    reset(): void;
    private updateBoardData;
}
