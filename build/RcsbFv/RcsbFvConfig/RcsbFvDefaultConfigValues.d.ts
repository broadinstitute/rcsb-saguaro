/**Default board configuration values definition*/
interface RcsbFvDefaultConfigValuesInterface {
    readonly increasedView: number;
    readonly trackColor: string;
    readonly displayColor: string;
    readonly trackHeight: number;
    readonly trackAxisHeight: number;
    readonly trackWidth: number;
    readonly rowTitleWidth: number;
    readonly displayDomain: [number, number];
    readonly interpolationType: string;
    readonly rowHideTransitionTimeout: number;
    readonly titleAndTrackSpace: number;
    readonly borderWidth: number;
    readonly rowGlowWidth: number;
    readonly rowGlowColor: string;
    readonly borderColor: string;
    readonly hideInnerBorder: boolean;
    readonly hideRowGlow: boolean;
}
/**Default board configuration values*/
export declare const RcsbFvDefaultConfigValues: RcsbFvDefaultConfigValuesInterface;
/**Interpolation types for line and area displays*/
export declare const enum InterpolationTypes {
    STEP = "step",
    BASIS = "basis",
    CARDINAL = "cardinal",
    LINEAR = "linear"
}
/**Board track display types*/
export declare const enum RcsbFvDisplayTypes {
    BLOCK = "block",
    AXIS = "axis",
    SEQUENCE = "sequence",
    PIN = "pin",
    LINE = "line",
    AREA = "area",
    BLOCK_AREA = "block-area",
    MULTI_AREA = "multi-area",
    VLINE = "vline",
    VARIANT = "variant",
    BOND = "bond",
    COMPOSITE = "composite"
}
export {};
