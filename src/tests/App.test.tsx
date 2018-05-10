import * as React from 'react';
import App from '../components/App';
import *  as renderer from 'react-test-renderer';
import {testTitleSlide as ts} from './TestFixtures';


test('It displays the main title.', () => {
  const component = renderer.create(
      <App {...ts}/>
  );
  const testInstance = component.root;
  expect(testInstance.findByProps({className: "mainTitle"}).children[0]).toEqual(ts.mainTitle);
});

test('It renders the slide list.', () => {
  const component = renderer.create(
      <App {...ts}/>
  );
  expect(component.toJSON().children[0].props.className).toEqual("slideListBorder");
});

test('It renders the content.', () => {
  const component = renderer.create(
      <App {...ts}/>
  );
  expect(component.toJSON().children[1].props.className).toEqual("contentBorder");
});