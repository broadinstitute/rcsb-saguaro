import { RcsbFvDisplayTypes } from './RcsbFvDefaultConfigValues';
import { RcsbFvDisplayConfigInterface, RcsbFvRowConfigInterface } from "./RcsbFvConfigInterface";
import { RcsbFvTrackData, RcsbFvTrackDataElementInterface, RcsbFvColorGradient } from "../../RcsbDataManager/RcsbDataManager";
import { LocationViewInterface } from "../../RcsbBoard/RcsbBoard";
/**Board track configuration manager className*/
export declare class RcsbFvConfig implements RcsbFvRowConfigInterface {
    innerTrackId: string;
    trackId: string;
    boardId: string;
    displayType: RcsbFvDisplayTypes;
    length: number;
    range: {
        min: number;
        max: number;
    };
    elementId?: string;
    trackData?: RcsbFvTrackData;
    displayConfig?: Array<RcsbFvDisplayConfigInterface>;
    trackHeight?: number;
    trackWidth?: number;
    trackColor?: string;
    displayColor?: string | RcsbFvColorGradient;
    displayDomain?: [number, number];
    interpolationType?: string;
    dynamicDisplay?: boolean;
    nonEmptyDisplay?: boolean;
    elementClickCallBack?: (d?: RcsbFvTrackDataElementInterface, e?: MouseEvent) => void;
    elementEnterCallBack?: (d?: RcsbFvTrackDataElementInterface, e?: MouseEvent) => void;
    elementLeaveCallBack?: (d?: RcsbFvTrackDataElementInterface, e?: MouseEvent) => void;
    includeTooltip?: boolean;
    updateDataOnMove?: (d: LocationViewInterface) => Promise<RcsbFvTrackData>;
    overlap: boolean;
    minRatio?: number;
    selectDataInRangeFlag?: boolean;
    hideEmptyTrackFlag?: boolean;
    highlightHoverPosition?: boolean;
    highlightHoverElement?: boolean;
    highlightHoverCallback?: (n: Array<RcsbFvTrackDataElementInterface>) => void;
    hideInnerBorder?: boolean;
    hideRowGlow?: boolean;
    constructor(args: RcsbFvRowConfigInterface);
    /**Update board track configuration. This method sets some attributes to default values when configuration values are not available.
     * @param args Board track configuration object
     * */
    updateConfig(args: RcsbFvRowConfigInterface): void;
    /**Check if sequence length and DOM element Id are available
     * @return boolean
     * */
    configCheck(): boolean;
    getInterpolationType(type: string): string;
    /**Deletes board track annotation data*/
    resetTrackData(): void;
    /**Load board track annotation data
     * @param data New board track annotation data
     * */
    addTrackData(data: RcsbFvTrackData): void;
    /**Load board track annotation data
     * @param data New board track annotation data
     * */
    updateTrackData(data: RcsbFvTrackData): void;
}
