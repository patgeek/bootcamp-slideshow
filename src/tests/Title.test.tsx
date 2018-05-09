import * as React from 'react';
import Title from '../components/Title';
import *  as renderer from 'react-test-renderer';


test('It displays the main title.', () => {
    const component = renderer.create(
        <Title mainTitle="Star Wars" subTitle="Episode I"/>
    );
    const testInstance = component.root;
    // console.log(testInstance.findByProps({className: "mainTitle"}).children);
    // console.log(testInstance.props);
    // expect(testInstance.props.mainTitle).toBe("Star Wars");
    expect(testInstance.findByProps({className: "mainTitle"}).children[0]).toEqual("Star Wars");
});

test('It displays the subtitle.', () => {
    const component = renderer.create(
        <Title mainTitle="Star Wars" subTitle="Episode I"/>
    );
    const testInstance = component.root;
    // console.log(component.toJSON());
    expect("subTitle" in testInstance.props).toBe(true);
});

test("It doesn't render a null optional subtitle", () => {
    const component = renderer.create(
        <Title mainTitle="Star Wars"/>
    );
    // const testInstance = component.root;
    // console.log(testInstance);
    expect(component.toJSON().children).toHaveLength(1);
});