import * as React from "react";
import { RcsbFvRowConfigInterface } from "../RcsbFvConfig/RcsbFvConfigInterface";
import { RcsbFvContextManager } from "../RcsbFvContextManager/RcsbFvContextManager";
import { RcsbSelection } from "../../RcsbBoard/RcsbSelection";
import { RcsbScaleInterface } from "../../RcsbBoard/RcsbD3/RcsbD3ScaleFactory";
/**Board track  annotations cell React component interface*/
interface RcsbFvRowTrackInterface {
    readonly id: string;
    readonly rowTrackConfigData: RcsbFvRowConfigInterface;
    readonly contextManager: RcsbFvContextManager;
    readonly xScale: RcsbScaleInterface;
    readonly selection: RcsbSelection;
    readonly callbackRcsbFvRow: (height: number) => void;
    readonly rowNumber: number;
    readonly renderSchedule: "async" | "sync" | "fixed";
}
/**Board track  annotations cell React component state*/
interface RcsbFvRowTrackState {
    readonly rowTrackConfigData: RcsbFvRowConfigInterface;
    readonly rowTrackHeight: number;
    readonly mounted: boolean;
}
export declare class RcsbFvRowTrack extends React.Component<RcsbFvRowTrackInterface, RcsbFvRowTrackState> {
    /**Track Protein Feature Viewer object*/
    private rcsbFvTrack;
    /**Feature Viewer builder Async task*/
    private asyncTask;
    /**Subscription to events*/
    private subscription;
    readonly state: RcsbFvRowTrackState;
    constructor(props: RcsbFvRowTrackInterface);
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private subscribe;
    private renderTrack;
    private queueTask;
    private rcsbFvTrackInit;
    /**This method is called when the final track height is known, it updates React Component height State*/
    private updateHeight;
    /**
     * @return CSS style width and height for the cell
     * */
    private configStyle;
    private borderStyle;
}
export {};
