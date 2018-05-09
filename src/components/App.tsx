import * as React from 'react';
import Content from './Content'
import {Slide} from '../types/index';
import '../styles/App.css';


class App extends React.Component<Slide> {
  public render() {
    const {mainTitle, subTitle, body, type} = this.props;
    return (
      <Content 
        mainTitle={mainTitle}
        subTitle={subTitle}
        body={body}
        type={type}
      />
    )
  }
}

export default App;
