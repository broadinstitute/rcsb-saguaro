import { RcsbFvBoardConfigInterface, RcsbFvRowConfigInterface } from "../../RcsbFvConfig/RcsbFvConfigInterface";
export declare namespace RowConfigFactory {
    /**Combines global board configuration attributes and values with a particular track configuration object
     * @param rowId Inner div board track DOM element Id
     * @param boardId Inner div board DOM element Id
     * @param rowConfig Track configuration object
     * @param boardConfig Board configuration object
     * @return Config track object
     * */
    function getConfig(rowId: string, boardId: string, rowConfig: RcsbFvRowConfigInterface, boardConfig: RcsbFvBoardConfigInterface): RcsbFvRowConfigInterface;
}
