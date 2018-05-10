import {Slide} from '../types/index';

const s1: Slide = {
    id: 0,
    mainTitle: "Star Wars",
    subTitle: "Episode I",
    body: "",
    type: "TITLE",
}

const s2: Slide = {
    id: 1,
    mainTitle: "Thoughts",
    subTitle: "",
    body: "The acting is not very good.\nI liked it as a kid.",
    type: "SIMPLE",
}

const s3: Slide = {
    id: 2,
    mainTitle: "More Thoughts",
    subTitle: "",
    body: "Where do I take this project next?\nI think I need to implement redux.\nTime to read docs.",
    type: "SIMPLE",
}

const slides = [s1, s2, s3];

export default slides;