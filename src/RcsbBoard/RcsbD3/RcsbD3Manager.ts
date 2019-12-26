import {RcsbD3Constants} from "./RcsbD3Constants";
import {Selection, select} from "d3-selection";
import {ZoomBehavior, ZoomedElementBaseType} from "d3-zoom";
import {ScaleLinear} from "d3-scale";
import {MoveBlockInterface, PlotBlockInterface, RcsbD3BlockManager} from "./RcsbD3DisplayManager/RcsbD3BlockManager";
import {MovePinInterface, PlotPinInterface, RcsbD3PinManager} from "./RcsbD3DisplayManager/RcsbD3PinManager";
import {MoveSequenceInterface, PlotSequenceInterface, RcsbD3SequenceManager} from "./RcsbD3DisplayManager/RcsbD3SequenceManager";
import {MoveLineInterface, PlotLineInterface, RcsbD3LineManager} from "./RcsbD3DisplayManager/RcsbD3LineManager";
import {MoveAreaInterface, PlotAreaInterface, RcsbD3AreaManager} from "./RcsbD3DisplayManager/RcsbD3AreaManager";
import {MoveVariantInterface, PlotVariantInterface, RcsbD3VariantManager} from "./RcsbD3DisplayManager/RcsbD3VariantManager";
import {MoveVlineInterface, PlotVlineInterface, RcsbD3VlineManager} from "./RcsbD3DisplayManager/RcsbD3VlineManager";
import * as classes from "../scss/RcsbBoard.module.scss";

export interface SVGConfInterface  {
    elementId: string,
    domClass: string;
    svgClass: string;
    width: number;
    pointerEvents: string;
    contextMenu: () => void;
}

export interface MainGConfInterface  {
    masterClass: string;
    innerClass: string;
    dblClick: () =>void;
    mouseDown: () => void;
    mouseUp: () => void;
}

export interface PainConfInterface {
    paneClass: string;
    bgColor: string;
    elementId: string;
}

export interface TrackConfInterface {
    trackClass: string;
    height: number;
    bgColor: string;
}

export interface ZoomConfigInterface {
    zoomEventHandler:ZoomBehavior<ZoomedElementBaseType, any>;
    zoomCallBack: () => void;
}

export interface HighlightRegionInterface {
    trackG: Selection<SVGGElement,any,null,undefined>;
    height: number;
    begin: number;
    end: number;
    xScale: ScaleLinear<number,number>;
    rectClass: string;
}

export class RcsbD3Manager {

    _dom: Selection<HTMLElement, any, null, undefined> = null;
    _svg: Selection<SVGSVGElement, any, null, undefined> = null;
    _zoomG: Selection<SVGGElement, any, null, undefined> = null;
    _svgG: Selection<SVGGElement, any, null, undefined> = null;
    _pane: Selection<SVGRectElement, any, null, undefined> = null;
    _trackHeightPosition: number = 0;

    _width: number = null;

    svgG(): Selection<SVGGElement, any, null, undefined> {
        return this._svgG;
    }

    zoomG(): Selection<SVGGElement, any, null, undefined> {
        return this._zoomG;
    }

    buildSvgNode(config: SVGConfInterface): void {
        this._dom = select(document.getElementById(config.elementId));
        this._dom.classed(config.domClass, true)
            .style(RcsbD3Constants.WIDTH, config.width + "px");

        this._svg = this._dom.append<SVGSVGElement>(RcsbD3Constants.SVG)
            .attr(RcsbD3Constants.CLASS, config.svgClass)
            .attr(RcsbD3Constants.WIDTH, config.width)
            .attr(RcsbD3Constants.POINTER_EVENTS, config.pointerEvents)
            .on(RcsbD3Constants.CONTEXT_MENU, config.contextMenu);

        this._width = config.width;
    }

    addMainG(config: MainGConfInterface): void {
        this._zoomG = this._svg.append<SVGGElement>(RcsbD3Constants.G);
        this._svgG = this._zoomG.attr(RcsbD3Constants.CLASS, config.masterClass)
            .append<SVGGElement>(RcsbD3Constants.G)
            .attr(RcsbD3Constants.CLASS, config.innerClass)
            .on(RcsbD3Constants.DBL_CLICK, config.dblClick)
            .on(RcsbD3Constants.MOUSE_DOWN, config.mouseDown)
            .on(RcsbD3Constants.MOUSE_UP, config.mouseUp);
    }

    addPane(config: PainConfInterface): void {
        this._pane = this._svgG
            .append<SVGRectElement>(RcsbD3Constants.RECT)
            .attr(RcsbD3Constants.CLASS, config.paneClass)
            .attr(RcsbD3Constants.ID, config.elementId)
            .attr(RcsbD3Constants.WIDTH, this._width)
            .style(RcsbD3Constants.FILL, config.bgColor)
    }

    resetAllTracks(): void{
        this._trackHeightPosition = 0;
        this._svgG.selectAll("."+classes.rcsbTrack).remove();
    }

    addTrack(config: TrackConfInterface): Selection<SVGGElement, any, null, undefined> {
        this._pane.style(RcsbD3Constants.FILL, config.bgColor);

        const trackG: Selection<SVGGElement, any, null, undefined> = this._svgG
            .append<SVGGElement>(RcsbD3Constants.G)
            .attr(RcsbD3Constants.CLASS, config.trackClass)
            .attr(RcsbD3Constants.TRANSFORM, "translate(0," + this._trackHeightPosition + ")");

        this._trackHeightPosition += config.height;

        return trackG;
    }

    setBoardHeight(height: number): void {
        this._dom.style(RcsbD3Constants.HEIGHT, height + "px");
        this._svg.attr(RcsbD3Constants.HEIGHT, height);
        this._pane.attr(RcsbD3Constants.HEIGHT, height);
    }

    addZoom(config: ZoomConfigInterface): void {
        this._zoomG.call(
            config.zoomEventHandler.on(RcsbD3Constants.ZOOM, config.zoomCallBack)
        ).on(RcsbD3Constants.DBLCLIK_ZOOM, null);
    }

    highlightRegion(config: HighlightRegionInterface): void {
        config.trackG.append<SVGRectElement>(RcsbD3Constants.RECT)
            .attr(RcsbD3Constants.X, config.xScale(config.begin - 0.5))
            .attr(RcsbD3Constants.Y, 0)
            .attr(RcsbD3Constants.WIDTH, config.xScale(config.end + 0.5) - config.xScale(config.begin - 0.5))
            .attr(RcsbD3Constants.HEIGHT, config.height)
            .attr(RcsbD3Constants.FILL, "#faf3c0")
            .attr(RcsbD3Constants.FILL_OPACITY, 0.75)
            .attr(RcsbD3Constants.CLASS, config.rectClass);
    }

    plotBlockDisplay(config: PlotBlockInterface): void {
        const track: RcsbD3BlockManager = new RcsbD3BlockManager();
        return track.plot(config);
    }

    moveBlockDisplay(config: MoveBlockInterface) {
        const track: RcsbD3BlockManager = new RcsbD3BlockManager();
        return track.move(config);
    }

    plotPinDisplay(config: PlotPinInterface): void {
        const track: RcsbD3PinManager = new RcsbD3PinManager();
        return track.plot(config);
    }

    movePinDisplay(config: MovePinInterface): void {
        const track: RcsbD3PinManager = new RcsbD3PinManager();
        return track.move(config);
    }

    plotSequenceDisplay(config: PlotSequenceInterface): void {
        const track: RcsbD3SequenceManager = new RcsbD3SequenceManager();
        return track.plot(config);
    }

    moveSequenceDisplay(config: MoveSequenceInterface): void {
        const track: RcsbD3SequenceManager = new RcsbD3SequenceManager();
        return track.move(config);
    }

    plotLineDisplay(config: PlotLineInterface): void {
        const track: RcsbD3LineManager = new RcsbD3LineManager();
        return track.plot(config);
    }

    moveLineDisplay(config: MoveLineInterface): void {
        const track: RcsbD3LineManager = new RcsbD3LineManager();
        return track.move(config);
    }

    plotAreaDisplay(config: PlotAreaInterface): void {
        const track: RcsbD3AreaManager = new RcsbD3AreaManager();
        return track.plot(config);
    }

    moveAreaDisplay(config: MoveAreaInterface): void {
        const track: RcsbD3AreaManager = new RcsbD3AreaManager();
        return track.move(config);
    }

    plotVariantDisplay(config: PlotVariantInterface): void {
        const track: RcsbD3VariantManager = new RcsbD3VariantManager();
        return track.plot(config);
    }

    moveVariantDisplay(config: MoveVariantInterface): void {
        const track: RcsbD3VariantManager = new RcsbD3VariantManager();
        return track.move(config);
    }

    plotVlineDisplay(config: PlotVlineInterface): void {
        const track: RcsbD3VlineManager = new RcsbD3VlineManager();
        return track.plot(config);
    }

    moveVlineDisplay(config: MoveVlineInterface): void {
        const track: RcsbD3VlineManager = new RcsbD3VlineManager();
        return track.move(config);
    }
}