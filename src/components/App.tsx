import * as React from 'react';
import Content from './Content'
import SlideList from './SlideList';
import {Slide} from '../types/index';
import '../styles/App.css';


export interface Props {
  slides: Slide[];
  slideId: number;
  onChange: (id: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="appBorder">
        <SlideList slides={this.props.slides} 
          onChange={this.props.onChange}
          onNext={this.props.onNext}
          onPrevious={this.props.onPrevious}/>
        <Content slide={this.props.slides[this.props.slideId]} 
          onChange={this.props.onChange} 
          onNext={this.props.onNext}
          onPrevious={this.props.onPrevious}/>
      </div>
    )
  }
}

export default App;
