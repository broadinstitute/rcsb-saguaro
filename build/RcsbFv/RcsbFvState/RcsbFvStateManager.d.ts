import { RcsbFvContextManager } from "../RcsbFvContextManager/RcsbFvContextManager";
import { RcsbScaleInterface } from "../../RcsbBoard/RcsbD3/RcsbD3ScaleFactory";
import { RcsbSelection } from "../../RcsbBoard/RcsbSelection";
interface RcsbFvStateInterface {
    readonly boardId: string;
    readonly contextManager: RcsbFvContextManager;
    readonly xScale: RcsbScaleInterface;
    readonly selection: RcsbSelection;
}
/**
 * Board Selection and Scale Manager
 * */
export declare class RcsbFvStateManager {
    private readonly boardId;
    private readonly contextManager;
    private readonly xScale;
    private readonly selection;
    private readonly subscription;
    constructor(config: RcsbFvStateInterface);
    unsubscribe(): void;
    /**Subscribe className to rxjs events (adding tracks, change scale, update board config)
     * @return rxjs Subscription object
     * */
    private subscribe;
    /**Update selection object
     * @param newSelection new selection object
     * */
    private setSelection;
    /**Add elements to selection object
     * @param newSelection new selection elements to be added
     * */
    private addSelection;
    /**Force current selection in all tracks.*/
    private select;
    /**Update d3 xScale domain
     * @param domainData new xScale domain
     * */
    private setDomain;
    /**Force all board track annotation cells to set xScale. Called when a new track has been added*/
    private setScale;
}
export {};
