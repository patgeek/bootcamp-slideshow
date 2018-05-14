import * as React from 'react';
import {TitleSlide, SimpleSlide, TwoColSlide} from '../types/index';
import Content from '../components/Content';

const s0: TitleSlide = {
    id: 0,
    mainTitle: "Star Wars",
    subTitle: "Episode I",
    type: "TITLE",
}

const s1: SimpleSlide = {
    id: 1,
    mainTitle: "Thoughts",
    body: "The acting is not very good.\nI liked it as a kid.",
    type: "SIMPLE",
}

const s2: SimpleSlide = {
    id: 2,
    mainTitle: "More Thoughts",
    body: "Where do I take this project next?\nI think I need to implement redux.\nTime to read docs.",
    type: "SIMPLE",
}

const s3: TwoColSlide = {
    id: 3,
    mainTitle: "Two Columns",
    type: "TWOCOL",
    leftcol: "Here's the text in the left.",
    rightcol: "And here's the text in the right.",
}

const ts = [s0, s1, s2, s3];

export const testTitleContent = 
    <Content slide={s0} numSlides={2} onChange={() => {}} onNext={() => {}} onPrevious={() => {}} onVisited={() => {}}/>;

export const testSimpleContent = 
    <Content slide={s1} numSlides={4} onChange={() => {}} onNext={() => {}} onPrevious={() => {}} onVisited={() => {}}/>;

export const testTwoColContent = 
    <Content slide={s3} numSlides={4} onChange={() => {}} onNext={() => {}} onPrevious={() => {}} onVisited={() => {}}/>;

export default ts;