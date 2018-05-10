import * as React from 'react';
import Content from './Content'
import SlideList from './SlideList';
import {Slide} from '../types/index';
import '../styles/App.css';


class App extends React.Component<Slide> {
  public render() {
    return (
      <div className="appBorder">
        { this.buildSlideList() }
        { this.buildContent() }
      </div>
    )
  }

  private buildSlideList() {
    return (
      <SlideList/>
    )
  }

  private buildContent() {
    return (
      <Content {...this.props}/>
    )
  }
}

export default App;
