export interface Slide {
    id: number;
    mainTitle: string;
    type: "TITLE" | "SIMPLE" | "TWOCOL"
}

export interface TitleSlide extends Slide {
    subTitle: string;
    type: "TITLE";
}

export interface SimpleSlide extends Slide {
    body: string;
    type: "SIMPLE";
}

export interface TwoColSlide extends Slide {
    leftcol: string;
    rightcol: string;
    type: "TWOCOL"
}

export type GenericSlide = TitleSlide | SimpleSlide | TwoColSlide;

export interface StoreState {
    currentSlide: number; // will refer to id in the Slide interface
    slides: Slide[],
    visited: number[], // array of slide ids that have been viewed
}