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

const slides = [s1, s2];

export default slides;