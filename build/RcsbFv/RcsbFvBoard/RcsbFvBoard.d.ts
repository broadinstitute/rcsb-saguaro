import * as React from "react";
import { RcsbFvBoardConfigInterface } from "../RcsbFvConfig/RcsbFvConfigInterface";
import { RcsbFvContextManager } from "../RcsbFvContextManager/RcsbFvContextManager";
import { RcsbSelection } from "../../RcsbBoard/RcsbSelection";
import { RcsbScaleInterface } from "../../RcsbBoard/RcsbD3/RcsbD3ScaleFactory";
import { RcsbFvExtendedRowConfigInterface } from "./Utils/BoardDataState";
import { ReactNode } from "react";
/**Board React component configuration interface*/
export interface RcsbFvBoardFullConfigInterface {
    readonly rowConfigData: Array<RcsbFvExtendedRowConfigInterface>;
    readonly boardConfigData: RcsbFvBoardConfigInterface;
}
/**Board React component interface*/
interface RcsbFvBoardInterface extends RcsbFvBoardFullConfigInterface {
    readonly boardId: string;
    readonly contextManager: RcsbFvContextManager;
    readonly resolve: () => void;
    readonly xScale: RcsbScaleInterface;
    readonly selection: RcsbSelection;
}
/**Board React component state interface*/
interface RcsbFvBoardState {
    readonly rowConfigData: Array<RcsbFvExtendedRowConfigInterface>;
    readonly boardConfigData: RcsbFvBoardConfigInterface;
    readonly progressStatus: number;
}
/**Board React Component className*/
export declare class RcsbFvBoard extends React.Component<RcsbFvBoardInterface, RcsbFvBoardState> {
    /**Subscription to events*/
    private subscription;
    /**Global d3 Xscale object shaed among all board tracks*/
    private readonly xScale;
    /**Global selection shared among all tracks*/
    private readonly selection;
    /**Promise resolve callback when board is complete*/
    private resolveOnReady;
    readonly state: RcsbFvBoardState;
    constructor(props: RcsbFvBoardInterface);
    render(): ReactNode;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<RcsbFvBoardInterface>, prevState: Readonly<RcsbFvBoardState>, snapshot?: any): void;
    /**Subscribe className to rxjs events (adding tracks, change scale, update board config)
     * @return rxjs Subscription object
     * */
    private subscribe;
    /**Updates board configuration
     * @param configData Board and track configuration interface
     * */
    private updateBoardConfig;
    private setMouseOverCallback;
    private setMouseLeaveCallback;
    private onMouseOver;
    private onMouseLeave;
    private resetReadyStatus;
    private checkReadyState;
    private renderStarts;
    /**
     * Trigger Board Ready Event
     **/
    private boardReady;
    private boardHover;
}
export {};
