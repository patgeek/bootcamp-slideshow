import * as React from 'react';
import App from '../components/App';
import *  as renderer from 'react-test-renderer';
import {testTitleSlide as ts} from './TestFixtures';


test('It displays the main title.', () => {
  const component = renderer.create(
      <App id={ts.id}
        mainTitle={ts.mainTitle}
        subTitle={ts.subTitle}
        body={ts.body}
        type={ts.type}
      />
  );
  const testInstance = component.root;
  expect(testInstance.findByProps({className: "mainTitle"}).children[0]).toEqual("Star Wars");
});
