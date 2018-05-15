import * as React from 'react';
import App from '../components/App';
import *  as renderer from 'react-test-renderer';
import ts from './TestFixtures';


test('It renders the slide list.', () => {
  const component = renderer.create(
      <App slides={ts} slideId={0} visited={[0]} onChange={() => {}} onNext={() => {}} onPrevious={() => {}} onVisited={() => {}}/>
  );
  expect(component.toJSON().children[0].props.className).toEqual("slideListBorder");
});

test('It renders the content.', () => {
  const component = renderer.create(
    <App slides={ts} slideId={0} visited={[0]} onChange={() => {}} onNext={() => {}} onPrevious={() => {}} onVisited={() => {}}/>
  );
  expect(component.toJSON().children[1].props.className).toEqual("contentBorder");
});