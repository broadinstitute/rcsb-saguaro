import * as React from "react";
import { ReactNode } from "react";
export interface RcsbFvRowMarkInterface<T> extends RcsbFvRowMarkPublicInterface<T> {
    isGlowing: boolean;
}
export interface RcsbFvRowMarkPublicInterface<T> extends RcsbFvRowMarkCallbackInterface {
    externalRowMark?: {
        component: typeof React.Component<T>;
        props: T;
    };
}
interface RcsbFvRowMarkCallbackInterface {
    clickCallback?: () => void;
    hoverCallback?: () => void;
}
export declare class RcsbFvRowMark<T> extends React.Component<RcsbFvRowMarkInterface<T>, {}> {
    render(): ReactNode;
}
export {};
