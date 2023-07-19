import { RcsbFvRowConfigInterface } from "../RcsbFvConfig/RcsbFvConfigInterface";
import { RcsbFvContextManager } from "../RcsbFvContextManager/RcsbFvContextManager";
import { RcsbSelection } from "../../RcsbBoard/RcsbSelection";
import { RcsbScaleInterface } from "../../RcsbBoard/RcsbD3/RcsbD3ScaleFactory";
/**This className provides  an abstraction layer to build and manage a particular board annotation cell*/
export declare class RcsbFvTrack {
    /**SVG/HTML level object manager*/
    private rcsbBoard;
    /**Board annotation cells may contain different tracks to avoid visual overlapping*/
    private rcsbTrackArray;
    /**Object that handles how data needs to be displayed*/
    private rcsbFvDisplay;
    /**Row configuration object*/
    private rcsbFvConfig;
    /**DOM element id where the SVG component will be rendered*/
    private elementId;
    /**Row annotation data*/
    private trackData;
    /**Annotation loaded data flag*/
    private loadedData;
    /**Event handler subscription*/
    private subscription;
    /**Event Handler Manager. This is a common object for all board annotation cells*/
    private readonly contextManager;
    /**X-Scale d3 object. This is a common for all board annotation cells*/
    private readonly xScale;
    /**Current selection object. This is a common for all board annotation cells*/
    private readonly selection;
    constructor(args: RcsbFvRowConfigInterface, xScale: RcsbScaleInterface, selection: RcsbSelection, contextManager: RcsbFvContextManager);
    /**Builds the board annotation cell
     * @param args Board track configuration object
     * */
    private buildTrack;
    /**Start rendering the board track annotation cell
     * @param elementId DOM element Id
     * */
    init(elementId: string): void;
    /**Replaces the track configuration
     * @param args Board row configuration object
     * */
    setConfig(args: RcsbFvRowConfigInterface): void;
    /**Sets parameters for the SVG/HTML level object manager*/
    private initRcsbBoard;
    /**Build an inner track within a board track annotation cell
     * @return Inner track display object
     * */
    private buildRcsbTrack;
    /**Transforms data of composite displays
     * @return Array of annotation objects
     * */
    private collectCompositeData;
    /**Class inner function that transform annotation data for composite or single displays
     * @param trackData array of annotation objects
     * */
    private load;
    /**Add all inner track to the SVG/HTML level manager and start rendering*/
    private start;
    /**Subscribe function to handle events and communicate all board track annotations cell panels
     * @return Subscription object
     * */
    private subscribe;
    /**Unsubscribe all functions
     * */
    unsubscribe(): void;
    /**Modify d3 x-scale
     * @param boardId Id of the SVG/HTML manager that triggered the event
     * */
    private setScale;
    /**Highlights the region(s) defined by the attribute selection
     * @param selection object describing sequence regions
     * */
    private setSelection;
    /**Reset the cell content
     * @param trackId Event reset object interface
     * */
    private reset;
    /**Reset all inner tracks*/
    private _reset;
    /**Calculate height as function of the number of inner tracks
     * @return Board track annotation cell height
     * */
    getTrackHeight(): number | null;
}
