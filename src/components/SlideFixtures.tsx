import {Slide} from '../types/index';

let s1: Slide;
s1 = {
    id: 0,
    mainTitle: "Star Wars",
    subTitle: "Episode I",
    body: "",
    type: "TITLE",
}

let s2: Slide;
s2 = {
    id: 1,
    mainTitle: "Thoughts",
    subTitle: "",
    body: "The acting is not very good.\nI liked it as a kid.",
    type: "SIMPLE",
}

let s3: Slide;
s3 = {
    id: 2,
    mainTitle: "More Thoughts",
    subTitle: "",
    body: "Where do I take this project next?\nI think I need to implement redux.\nTime to read docs.",
    type: "SIMPLE",
}

const slides = [s1, s2, s3];

export default slides;