import {Slide} from '../types/index';

let title: Slide;
title = {
    mainTitle: "Star Wars",
    subTitle: "Episode I",
    body: "Not a good movie.",
    type: "TITLE",
}

let simple: Slide;
simple = {
    mainTitle: "Star Wars",
    subTitle: "Episode I",
    body: "Not a good movie.",
    type: "SIMPLE",
}


export {title as testTitleSlide};
export {simple as testSimpleSlide};