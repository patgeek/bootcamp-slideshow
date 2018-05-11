export interface Slide {
    id: number;
    mainTitle: string;
    subTitle: string;
    body: string;
    type: "TITLE" | "SIMPLE";
}

export interface TwoColSlide extends Slide {
    leftcol: string;
    rightcol: string;
    type: "TWOCOL"
}

type GenericSlide = Slide | TwoColSlide;

export interface StoreState {
    currentSlide: number; // will refer to id in the Slide interface
    slides: Slide[],
}