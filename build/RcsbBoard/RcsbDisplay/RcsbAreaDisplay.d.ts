import { RcsbLineDisplay } from "./RcsbLineDisplay";
import { RcsbFvTrackData } from "../../RcsbDataManager/RcsbDataManager";
export declare class RcsbAreaDisplay extends RcsbLineDisplay {
    private area;
    private multiLine;
    private blockAreaFlag;
    private multiAreaFlag;
    private readonly areaManager;
    protected readonly SUFFIX_ID: string;
    setInterpolationType(type: string): void;
    setBlockArea(flag: boolean): void;
    setMultiArea(flag: boolean): void;
    private setArea;
    private updateArea;
    protected geoPlot(data: RcsbFvTrackData): void;
    move(): void;
    private downSamplingSplit;
}
