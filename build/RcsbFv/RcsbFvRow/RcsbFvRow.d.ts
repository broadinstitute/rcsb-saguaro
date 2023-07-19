import * as React from "react";
import { RcsbFvRowConfigInterface } from "../RcsbFvConfig/RcsbFvConfigInterface";
import { RcsbFvContextManager } from "../RcsbFvContextManager/RcsbFvContextManager";
import { RcsbSelection } from "../../RcsbBoard/RcsbSelection";
import { RcsbScaleInterface } from "../../RcsbBoard/RcsbD3/RcsbD3ScaleFactory";
/**Board track React component interface*/
interface RcsbFvRowInterface {
    readonly id: string;
    readonly boardId: string;
    readonly rowNumber: number;
    readonly rowConfigData: RcsbFvRowConfigInterface;
    readonly contextManager: RcsbFvContextManager;
    readonly xScale: RcsbScaleInterface;
    readonly selection: RcsbSelection;
    readonly renderSchedule: "async" | "sync" | "fixed";
}
/**Board track React state interface*/
interface RcsbFvRowState {
    readonly rowHeight: number;
    readonly mounted: boolean;
    readonly rowConfigData: RcsbFvRowConfigInterface;
    readonly display: boolean;
    readonly titleGlow: boolean;
}
/**Board track React Component className*/
export declare class RcsbFvRow extends React.Component<RcsbFvRowInterface, RcsbFvRowState> {
    readonly state: RcsbFvRowState;
    /**Subscription to events*/
    private subscription;
    constructor(props: RcsbFvRowInterface);
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    /**Subscribe className to rxjs events (adding tracks, change scale, update board config)
     * @return rxjs Subscription object
     * */
    private subscribe;
    private hoverRow;
    private checkHoveredRow;
    private changeClass;
    /**This function will be called once the final height of the track is known*/
    private callbackRcsbFvRowTrack;
    /**Returns the full track width (title+annotations) and height
     * @return Board track full width
     * */
    configStyle(): React.CSSProperties;
}
export {};
