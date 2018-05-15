import * as React from 'react';
import {TitleSlide, SimpleSlide, TwoColSlide} from '../types/index';
import Content from '../components/Content';
import Simple from '../components/Simple';
import Title from '../components/Title';
import TwoCol from '../components/TwoCol';
import SlideList from '../components/SlideList';

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

export const testSimpleSlide = <Simple mainTitle="Test Title" body="Test Body"/>;
export const testTitleSlide = <Title mainTitle="Test Title" subTitle="Test Subtitle"/>;
export const testTwoColSlide = <TwoCol mainTitle="Test Title" leftcol="Test left col" rightcol="Test right col"/>;

export const testSlideList = <SlideList slides={ts} visited={[0]} onChange={() => {}}/>

export default ts;