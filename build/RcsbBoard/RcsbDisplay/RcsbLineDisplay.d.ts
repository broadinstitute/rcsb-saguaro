import { RcsbAbstractDisplay } from "./RcsbAbstractDisplay";
import { Line } from "d3-shape";
import { RcsbFvTrackData, RcsbFvTrackDataElementInterface } from "../../RcsbDataManager/RcsbDataManager";
import { RcsbScaleInterface } from "../RcsbD3/RcsbD3ScaleFactory";
import { LocationViewInterface } from "../RcsbBoard";
export declare class RcsbLineDisplay extends RcsbAbstractDisplay {
    private _yDomain;
    protected yScale: RcsbScaleInterface;
    protected maxPoints: number;
    protected innerData: Array<RcsbFvTrackDataElementInterface | null>;
    protected readonly SUFFIX_ID: string;
    protected definedScale: boolean;
    protected line: Line<RcsbFvTrackDataElementInterface>;
    private linePoints;
    protected hoverCallback: (event: MouseEvent) => void;
    mouseoutCallBack: () => void;
    protected clickCallBack: (event: MouseEvent) => void;
    setInterpolationType(type: string): void;
    yDomain(domain: [number, number]): void;
    setScale(): void;
    protected setLine(): void;
    protected updateLine(): void;
    _update(where: LocationViewInterface, compKey?: string): void;
    protected geoPlot(data: RcsbFvTrackData): void;
    move(): void;
    protected downSampling(points: RcsbFvTrackDataElementInterface[]): RcsbFvTrackDataElementInterface[];
}
