import * as React from 'react';
import Content from './Content'
import SlideList from './SlideList';
import {GenericSlide} from '../types/index';
import '../styles/App.css';


export interface Props {
  slides: GenericSlide[];
  slideId: number;
  visited: number[];
  onChange: (id: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onVisited: () => void;
}

class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="appBorder">
        <SlideList slides={this.props.slides} 
          visited={this.props.visited}
          onChange={this.props.onChange}/>
        <Content slide={this.props.slides[this.props.slideId]} 
          onChange={this.props.onChange} 
          onNext={this.props.onNext}
          onPrevious={this.props.onPrevious}
          onVisited={this.props.onVisited}/>
      </div>
    )
  }
}

export default App;
