import * as React from "react";
import { RcsbFvContextManager } from "../../RcsbFvContextManager/RcsbFvContextManager";
import { RcsbScaleInterface } from "../../../RcsbBoard/RcsbD3/RcsbD3ScaleFactory";
import { RcsbSelection } from "../../../RcsbBoard/RcsbSelection";
import { RcsbFvBoardConfigInterface } from "../../RcsbFvConfig/RcsbFvConfigInterface";
import { ReactNode } from "react";
interface AxisRowInterface {
    readonly boardId: string;
    readonly contextManager: RcsbFvContextManager;
    readonly xScale: RcsbScaleInterface;
    readonly selection: RcsbSelection;
    readonly boardConfigData: RcsbFvBoardConfigInterface;
}
export declare class AxisRow extends React.Component<AxisRowInterface, {
    axisKey: string;
}> {
    readonly state: {
        axisKey: string;
    };
    render(): ReactNode;
    componentDidUpdate(prevProps: Readonly<AxisRowInterface>, prevState: Readonly<{
        axisKey: string;
    }>, snapshot?: any): void;
}
export {};
