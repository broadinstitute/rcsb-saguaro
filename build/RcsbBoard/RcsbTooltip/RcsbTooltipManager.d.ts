import { RcsbFvTrackDataElementInterface } from "../../RcsbFv";
export declare class RcsbTooltipManager {
    private readonly boardId;
    private readonly divHeight;
    private tooltipDiv;
    private tooltipDescriptionDiv;
    private refDiv;
    constructor(boardId: string);
    showTooltip(d: RcsbFvTrackDataElementInterface): void;
    private static buildIndexNames;
    showTooltipDescription(d: RcsbFvTrackDataElementInterface): void;
    hideTooltip(): void;
    private static capitalizeFirstLetter;
    private static bNode;
}
