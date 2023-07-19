import * as React from "react";
import { RcsbFvBoardConfigInterface, RcsbFvRowConfigInterface } from "../../RcsbFvConfig/RcsbFvConfigInterface";
import { RcsbFvContextManager } from "../../RcsbFvContextManager/RcsbFvContextManager";
interface BoardProgressInterface {
    readonly boardId: string;
    readonly boardConfigData: RcsbFvBoardConfigInterface;
    readonly contextManager: RcsbFvContextManager;
    readonly rowConfigData: Array<RcsbFvRowConfigInterface>;
}
export declare class BoardProgress extends React.Component<BoardProgressInterface> {
    private subscription;
    private tooltipDiv;
    private refDiv;
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private subscribe;
    /**Row Track Board Ready Event
     * @param rowData
     * */
    private rowReady;
    private showStatus;
    private statusComplete;
}
export {};
