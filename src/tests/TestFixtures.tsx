import {Slide} from '../types/index';

let title: Slide;
title = {
    id: 0,
    mainTitle: "Star Wars",
    subTitle: "Episode I",
    body: "Not a good movie.",
    type: "TITLE",
}

let simple: Slide;
simple = {
    id: 1,
    mainTitle: "Star Wars",
    subTitle: "Episode I",
    body: "Not a good movie.",
    type: "SIMPLE",
}


export {title as testTitleSlide};
export {simple as testSimpleSlide};