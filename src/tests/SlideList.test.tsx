import * as React from 'react';
import SlideList from '../components/SlideList';
import *  as renderer from 'react-test-renderer';
import ts from './TestFixtures';


test('It can be rendered.', () => {
    const component = renderer.create(
        <SlideList slides={ts} onChange={() => {}} onNext={() => {}} onPrevious={() => {}}/>
    );
    expect(component.toJSON().children.length).toBeGreaterThan(0);
});

test('Button list is rendered.', () => {
    const component = renderer.create(
        <SlideList slides={ts} onChange={() => {}} onNext={() => {}} onPrevious={() => {}}/>
    );
    expect(component.toJSON().children[1].type).toBe("ul");
});

test('Individual buttons are rendered.', () => {
    const component = renderer.create(
        <SlideList slides={ts} onChange={() => {}} onNext={() => {}} onPrevious={() => {}}/>
    );
    expect(component.toJSON().children[1].children.length).toBeGreaterThan(0)
});