import * as React from "react";
import { RcsbFvRowConfigInterface } from "../RcsbFvConfig/RcsbFvConfigInterface";
import { ReactNode } from "react";
/**Board track title cell React component interface*/
export interface RcsbFvRowTitleInterface {
    readonly data: RcsbFvRowConfigInterface;
    readonly rowTitleHeight: number;
    readonly isGlowing: boolean;
}
interface RcsbFvRowTitleInterState {
    readonly expandTitle: boolean;
}
export type RowTitleComponentType<P = {}, S = {}> = typeof React.Component<RcsbFvRowTitleInterface & P, S>;
export declare class RcsbFvRowTitle extends React.Component<RcsbFvRowTitleInterface, RcsbFvRowTitleInterState> {
    private readonly configData;
    readonly state: {
        expandTitle: boolean;
    };
    private readonly PADDING_RIGHT;
    constructor(props: RcsbFvRowTitleInterface);
    render(): ReactNode;
    /**
     * @return Title string defined in the track configuration object
     * */
    private setTitle;
    /**
     * @return CSS style width and height for the cell
     * */
    private configStyle;
    /**
     * @return Title flag color css style properties
     * */
    private configTitleFlagColorStyle;
    private marker;
    private expandTitle;
}
export {};
