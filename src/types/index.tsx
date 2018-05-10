export interface Slide {
    id: number;
    mainTitle: string;
    subTitle: string;
    body: string;
    type: string;
    onChange?: (id: number) => void;
    onNext?: () => void;
    onPrevious?: () => void;
}

export interface StoreState {
    currentSlide: number; // will refer to id in the Slide interface
}