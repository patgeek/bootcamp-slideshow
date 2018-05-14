import * as React from 'react';
import Content from '../components/Content';
import Title from '../components/Title';
import Simple from '../components/Simple';
import *  as renderer from 'react-test-renderer';
import {testTitleSlide, testSimpleSlide} from './TestFixtures';


test('It can be rendered.', () => {
    const component = renderer.create(
        <Content slide={testTitleSlide} onChange={() => {}} onNext={() => {}} onPrevious={() => {}} onVisited={() => {}}/>
    );
    expect(component.toJSON().children.length).toBeGreaterThan(0);
});

test('It can render a Title slide.', () => {
    const component = renderer.create(
        <Content slide={testTitleSlide} onChange={() => {}} onNext={() => {}} onPrevious={() => {}} onVisited={() => {}}/>
    );
    const testInstance = component.root;
    expect(testInstance.findByType(Title));
});

test('It can render a Simple slide.', () => {
    const component = renderer.create(
        <Content slide={testSimpleSlide} onChange={() => {}} onNext={() => {}} onPrevious={() => {}} onVisited={() => {}}/>
    );
    const testInstance = component.root;
    expect(testInstance.findByType(Simple));
});

test('onPrevious is called when button is clicked.', () => {

});

test('onNext is called when button is clicked.', () => {

});