import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Slide} from './types/index';


let ts: Slide;
ts = {
  id: 0,
  mainTitle: "Main Title",
  subTitle: "Sub Title",
  body: "This is the body of the slide.",
  type: "TITLE",
}

ReactDOM.render(
  <App id={ts.id}
    mainTitle={ts.mainTitle}
    subTitle={ts.subTitle}
    body={ts.body}
    type={ts.type}
  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
