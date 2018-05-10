import * as React from 'react';
import Content from './Content'
import {Slide} from '../types/index';
import '../styles/App.css';


class App extends React.Component<Slide> {
  public render() {
    return (
      <div className="contentBorder">
          { this.buildContent() }
      </div>
    )
  }

  private buildContent() {
    return (
      <Content 
        mainTitle={this.props.mainTitle}
        subTitle={this.props.subTitle}
        body={this.props.body}
        type={this.props.type}
      />
    )
  }
}

export default App;
