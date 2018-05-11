import {Slide, TwoColSlide} from '../types/index';

const s0: Slide = {
    id: 0,
    mainTitle: "Star Wars",
    subTitle: "Episode I",
    body: "",
    type: "TITLE",
}

const s1: Slide = {
    id: 1,
    mainTitle: "Thoughts",
    subTitle: "",
    body: "The acting is not very good.\nI liked it as a kid.",
    type: "SIMPLE",
}

const s2: Slide = {
    id: 2,
    mainTitle: "More Thoughts",
    subTitle: "",
    body: "Where do I take this project next?\nI think I need to implement redux.\nTime to read docs.",
    type: "SIMPLE",
}

const s3: TwoColSlide = {
    id: 3,
    mainTitle: "Two Columns",
    subTitle: "",
    body: "",
    type: "TWOCOL",
    leftcol: "Here's the text in the left.",
    rightcol: "And here's the text in the right.",
}

const slides = [s0, s1, s2, s3];

export default slides;