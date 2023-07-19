import * as React from "react";
import { RcsbFvContextManager } from "../../RcsbFvContextManager/RcsbFvContextManager";
import { RcsbFvBoardConfigInterface } from "../../RcsbFvConfig/RcsbFvConfigInterface";
interface RowGlowInterface {
    readonly boardId: string;
    readonly contextManager: RcsbFvContextManager;
    readonly boardConfigData: RcsbFvBoardConfigInterface;
}
export declare class RowGlow extends React.Component<RowGlowInterface> {
    private subscription;
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private subscribe;
    private updateGlow;
    private displayGlow;
    private hideGlow;
}
export {};
