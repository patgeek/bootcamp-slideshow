import * as React from 'react';
import Title from './Title';
import Simple from './Simple';
import {Slide} from '../types/index';


class Content extends React.Component<Slide> {
    public render() {
        const type = this.props.type;
        switch(type) {
            case "TITLE":
                return (
                    <Title mainTitle={this.props.mainTitle}
                        subTitle={this.props.subTitle}
                    />
                );
            case "SIMPLE":
                return (
                    <Simple mainTitle={this.props.mainTitle}
                        body={this.props.body}
                    />
                );
            default:
                return (
                    <Title mainTitle={this.props.mainTitle}
                        subTitle={this.props.subTitle}
                    />
                );

        }
    }
}

export default Content;