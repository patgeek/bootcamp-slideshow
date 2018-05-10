import {Slide} from '../types/index';

let s1: Slide;
s1 = {
    mainTitle: "Star Wars",
    subTitle: "Episode I",
    body: "",
    type: "TITLE",
}

let s2: Slide;
s2 = {
    mainTitle: "Thoughts",
    subTitle: "",
    body: "The acting is not very good./nI liked it as a kid.",
    type: "SIMPLE",
}

let slides = [s1, s2];

export default slides;