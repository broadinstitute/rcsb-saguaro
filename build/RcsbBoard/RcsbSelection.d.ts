import { RcsbFvTrackDataElementInterface } from "../RcsbDataManager/RcsbDataManager";
export interface SelectionInterface {
    rcsbFvTrackDataElement: RcsbFvTrackDataElementInterface;
    domId: string;
}
export declare class RcsbSelection {
    private selectedElements;
    private hoverHighlightElements;
    private selectionChangeCallback;
    setSelectionChangeCallback(f: (selection: Array<RcsbFvTrackDataElementInterface>) => void): void;
    getSelected(mode: 'select' | 'hover'): Array<SelectionInterface>;
    setSelected(elements: Array<SelectionInterface> | SelectionInterface, mode: 'select' | 'hover'): void;
    addSelected(elements: Array<SelectionInterface> | SelectionInterface, mode: 'select' | 'hover', replaceLast?: boolean): void;
    clearSelection(mode: 'select' | 'hover'): void;
    reset(): void;
    private callback;
}
