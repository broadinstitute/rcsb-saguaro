import { RcsbFvRowConfigInterface } from "../RcsbFvConfig/RcsbFvConfigInterface";
import { RcsbDisplayInterface } from "../../RcsbBoard/RcsbDisplay/RcsbDisplayInterface";
export declare class RcsbFvDisplay {
    private displayIds;
    private readonly displayConfig;
    constructor(config: RcsbFvRowConfigInterface);
    initDisplay(): RcsbDisplayInterface;
    getDisplayIds(): string[];
    private composedDisplay;
    private static setDisplayConfig;
    private static singleDisplay;
}
