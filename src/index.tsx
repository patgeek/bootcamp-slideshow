import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import slides from './components/SlideFixtures';


const ts = slides[1];

ReactDOM.render(
  <App {...ts}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
