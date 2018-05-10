import * as React from 'react';
import SlideList from '../components/SlideList';
import *  as renderer from 'react-test-renderer';


test('It can be rendered.', () => {
    const component = renderer.create(
        <SlideList/>
    );
    console.log(component.toJSON())
    expect(component.toJSON().children.length).toBeGreaterThan(0);
});