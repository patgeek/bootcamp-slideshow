import * as React from 'react';
import Simple from '../components/Simple';
import *  as renderer from 'react-test-renderer';


test('It displays the main title.', () => {
    const component = renderer.create(
        <Simple mainTitle="Star Wars" body="Not a good movie."/>
    );
    const testInstance = component.root;
    expect(testInstance.findByProps({className: "mainTitle"}).children[0]).toEqual("Star Wars");
});

test('It displays the body.', () => {
    const component = renderer.create(
        <Simple mainTitle="Star Wars" body="Not a good movie."/>
    );
    const testInstance = component.root;
    expect(testInstance.findByProps({className: "body"}).children[0]).toEqual("Not a good movie.");
});

test('It does not display a subtitle.', () => {
    const component = renderer.create(
        <Simple mainTitle="Star Wars" body="Not a good movie."/>
    );
    const testInstance = component.root;
    expect("subTitle" in testInstance.props).toBe(false);
});