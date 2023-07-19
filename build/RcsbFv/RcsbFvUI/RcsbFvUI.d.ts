import * as React from "react";
import { RcsbFvBoardConfigInterface } from "../RcsbFvConfig/RcsbFvConfigInterface";
import { RcsbFvContextManager } from "../RcsbFvContextManager/RcsbFvContextManager";
import { RcsbScaleInterface } from "../../RcsbBoard/RcsbD3/RcsbD3ScaleFactory";
import { ReactNode } from "react";
export interface RcsbFvUIConfigInterface {
    readonly boardId: string;
    readonly boardConfigData: RcsbFvBoardConfigInterface;
    readonly contextManager: RcsbFvContextManager;
    readonly xScale: RcsbScaleInterface;
}
export interface RcsbFvUIStateInterface {
    collapse: boolean;
}
export interface RcsbFvUIButtonInterface {
    icon: ReactNode;
    callback: () => void;
}
export declare class RcsbFvUI extends React.Component<RcsbFvUIConfigInterface, RcsbFvUIStateInterface> {
    private tooltipDiv;
    private refDiv;
    /**UI config Object*/
    private readonly config;
    private subscription;
    private hideTask;
    readonly state: RcsbFvUIStateInterface;
    render(): ReactNode;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private subscribe;
    private boardHover;
    private displayUI;
    private hideUI;
    buildButton(buttonConfig: RcsbFvUIButtonInterface): ReactNode;
    private changeState;
    /***************
     ** UI methods **
     ****************/
    private zoomIn;
    private zoomOut;
    private move;
    /**Force all board track annotation cells to set xScale. Called when a new track has been added*/
    private setScale;
    /**Update d3 xScale domain
     * @param domainData new xScale domain
     * */
    private setDomain;
}
