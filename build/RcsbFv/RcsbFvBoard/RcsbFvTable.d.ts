import * as React from "react";
import { RcsbFvContextManager } from "../RcsbFvContextManager/RcsbFvContextManager";
import { RcsbSelection } from "../../RcsbBoard/RcsbSelection";
import { RcsbFvBoardFullConfigInterface } from "./RcsbFvBoard";
import { RcsbScaleInterface } from "../../RcsbBoard/RcsbD3/RcsbD3ScaleFactory";
import { RcsbFvExtendedRowConfigInterface } from "./Utils/BoardDataState";
import { ReactNode } from "react";
interface RcsbFvTableInterface extends RcsbFvBoardFullConfigInterface {
    readonly boardId: string;
    readonly contextManager: RcsbFvContextManager;
    readonly xScale: RcsbScaleInterface;
    readonly selection: RcsbSelection;
    readonly rowConfigData: Array<RcsbFvExtendedRowConfigInterface>;
}
export declare class RcsbFvTable extends React.Component<RcsbFvTableInterface> {
    /**Inner div board DOM element id*/
    private readonly boardId;
    /**Global d3 Xscale object shaed among all board tracks*/
    private readonly xScale;
    /**Global selection shared among all tracks*/
    private readonly selection;
    constructor(props: RcsbFvTableInterface);
    render(): ReactNode;
    private setMouseLeaveBoardCallback;
    private mouseLeaveBoardCallback;
    private getAxisRow;
    /**Returns the full track width (title+annotations)
     * @return Board track full width
     * */
    private configStyle;
}
export {};
