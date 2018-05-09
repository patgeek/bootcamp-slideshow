import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Slide} from './types/index';


let ts: Slide;
ts = {
  mainTitle: "Star Wars",
  subTitle: "Episode I",
  body: "Not a good movie.",
  type: "TITLE",
}

ReactDOM.render(
  <App mainTitle={ts.mainTitle}
    subTitle={ts.subTitle}
    body={ts.body}
    type={ts.type}
  />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
