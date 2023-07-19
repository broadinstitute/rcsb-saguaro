import { ScaleLinear, ScalePoint } from "d3-scale";
export interface RcsbScaleInterface<T = number, S = ScaleLinear<number, number>> {
    (x: T): number;
    _domain: [number, number];
    _range: [number, number];
    domain(x: T[]): RcsbScaleInterface;
    domain(): T[];
    range(x: number[]): RcsbScaleInterface;
    range(): number[];
    invert(x: number): T;
    checkAndSetScale(domain: [number, number], range: [number, number]): boolean;
    getScale(): S;
    reset(): void;
}
export declare namespace RcsbD3ScaleFactory {
    function getLinearScale(): RcsbScaleInterface;
    function getPointScale(): RcsbScaleInterface<string, ScalePoint<string>>;
}
