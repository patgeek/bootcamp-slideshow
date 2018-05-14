import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import slides from './components/SlideFixtures';
import { createStore } from 'redux';
import { slide } from './reducers/index';
// import { StoreState } from './types/index';
import { Provider } from 'react-redux';


const store = createStore(slide, {
  currentSlide: 0,
  slides,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
