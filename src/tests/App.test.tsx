import * as React from 'react';
import App from '../components/App';
import *  as renderer from 'react-test-renderer';
import {Slide} from '../types/index';


let ts: Slide;
ts = {
  mainTitle: "Star Wars",
  subTitle: "Episode I",
  body: "Not a good movie.",
  type: "TITLE",
}

test('It displays the main title.', () => {
  const component = renderer.create(
      <App mainTitle={ts.mainTitle}
        subTitle={ts.subTitle}
        body={ts.body}
        type={ts.type}
      />
  );
  const testInstance = component.root;
  expect(testInstance.findByProps({className: "mainTitle"}).children[0]).toEqual("Star Wars");
});
