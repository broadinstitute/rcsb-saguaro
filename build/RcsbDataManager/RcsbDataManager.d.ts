/**Interface to describe annotation gaps*/
export interface RcsbFvTrackDataElementGapInterface {
    /**Start position of the gap*/
    begin: number;
    /**End position of the gap*/
    end: number;
    /**Flag to indicate if annotation regions are connected or not*/
    isConnected: boolean;
}
/**Annotation Element Interface*/
export interface RcsbFvTrackDataElementInterface {
    /**Annotation local value. E.g. interface residue energy*/
    value?: number | string;
    /**Annotation local multidimensional value. E.g. Surface normal vector*/
    values?: Array<number>;
    /**Annotation global value. E.g. whole interface energy*/
    gValue?: number | string;
    /**Annotation start position*/
    begin: number;
    /**Annotation end position*/
    end?: number;
    /**Name of the start position. This information might be displayed in the annotation tooltip*/
    beginName?: string;
    /**Name of the end position. This information might be displayed in the annotation tooltip*/
    endName?: string;
    /**Annotation original reference start position. This information might be displayed in the annotation tooltip*/
    oriBegin?: number;
    /**Annotation original reference end position. This information might be displayed in the annotation tooltip*/
    oriEnd?: number;
    /**Name of the original reference start position. This information might be displayed in the annotation tooltip*/
    oriBeginName?: string;
    /**Name of the original reference end position. This information might be displayed in the annotation tooltip*/
    oriEndName?: string;
    /**Name of the original reference. This information might be displayed in the annotation tooltip*/
    indexName?: string;
    /**Annotation label. This information might be displayed in the annotation tooltip*/
    label?: string;
    /**Annotation name. This information might be displayed in the annotation tooltip*/
    name?: string;
    /**Annotation displayed color*/
    color?: string;
    /**Description associated to the annotation. This information might be displayed in the annotation tooltip*/
    description?: Array<string>;
    /**Annotation Id*/
    featureId?: string;
    /**Annotation type. This information might be displayed in the annotation tooltip*/
    type?: string;
    /**Track title. This information might be displayed in the annotation tooltip*/
    title?: string;
    /**Annotation inner region should not be highlighted*/
    isEmpty?: boolean;
    /**Annotation object is not a real annotation but a selected area from the user*/
    nonSpecific?: boolean;
    /**Annotation gaps that should be displayed as a dashed line*/
    gaps?: Array<RcsbFvTrackDataElementGapInterface>;
    /**Draw a circle on the start side of blocks*/
    openBegin?: boolean;
    /**Draw a circle on the end side of blocks*/
    openEnd?: boolean;
    /**Id of the annotation element (protein or gene) source*/
    sourceId?: string;
    /**Source reference database name*/
    source?: string;
    /**Name of the resource that dispatched the data*/
    provenanceName?: string;
    /**color associated to the resource that dispatched the data*/
    provenanceColor?: string;
    /**Alternative begin position for rects in block displays. It is used to split annotation into multiple rects when gaps are included*/
    rectBegin?: number;
    /**Alternative begin position for rects in block displays. It is used to split annotation into multiple rects when gaps are included*/
    rectEnd?: number;
    /**Callback when the annotation is clicked*/
    elementClickCallBack?: (x: RcsbFvTrackDataElementInterface, e?: MouseEvent) => void;
    /**Custom HTML for hover tooltip*/
    tooltipCallback?: (x: RcsbFvTrackDataElementInterface) => string;
}
export interface RcsbFvColorGradient {
    thresholds: Array<number>;
    colors: Array<string> | string;
}
/**Array of annotation elements*/
export declare class RcsbFvTrackData extends Array<RcsbFvTrackDataElementInterface> {
}
/**Map of annotation elements*/
export declare class RcsbFvTrackDataMap extends Map<string, RcsbFvTrackData> {
}
/**Class to load, process and check for spatial overlapping annotation data*/
export declare class RcsbDataManager {
    /**Join multiple arrays of annotation data elements into one
     * @param dataList Array of annotation arrays
     * @return RcsbFvTrackData Single array of annotations
     * */
    static joinTrackDataArray(dataList: Array<RcsbFvTrackData>): RcsbFvTrackData;
    /**Check spatial overlapping between annotation elements and return an array with non-overlapping sets of annotations
     * @param data Array of annotations
     * @return Array Multiple array of non-overlapping annotations
     * */
    static getNonOverlappingData(data: RcsbFvTrackData): Array<RcsbFvTrackData>;
    /**Check if twon annotation elements overlap in the space*/
    private static doOverlap;
    /**Checks annotation data*/
    static processData(dataTrack: RcsbFvTrackData): RcsbFvTrackData;
}
