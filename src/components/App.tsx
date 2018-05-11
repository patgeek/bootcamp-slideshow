import * as React from 'react';
import Content from './Content'
import SlideList from './SlideList';
import {Slide} from '../types/index';
import '../styles/App.css';


export interface Props {
  slides: Slide[];
}

class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="appBorder">
        <SlideList slides={this.props.slides}/>
        <Content {...this.props.slides[0]}/>
      </div>
    )
  }
}

export default App;
