import * as React from "react";
import { RcsbFvBoardConfigInterface } from "../../RcsbFvConfig/RcsbFvConfigInterface";
import { RcsbFvContextManager } from "../../RcsbFvContextManager/RcsbFvContextManager";
interface BoardGlowInterface {
    readonly boardId: string;
    readonly boardConfigData: RcsbFvBoardConfigInterface;
    readonly contextManager: RcsbFvContextManager;
}
export declare class BoardGlow extends React.Component<BoardGlowInterface> {
    /**Mouse Leave task*/
    private hideTask;
    private subscription;
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private subscribe;
    private boardHover;
    private displayGlow;
    private hideGlow;
}
export {};
