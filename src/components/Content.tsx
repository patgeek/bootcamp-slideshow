import * as React from 'react';
import Title from './Title';
import Simple from './Simple';
import {Slide} from '../types/index';
import '../styles/Content.css';


class Content extends React.Component<Slide> {
    public render() {
        return (
            <div>
                <div className="contentBorder">
                    { this.buildSlide(this.props) }
                </div>
                <div className="navBorder">
                    <button >Previous Slide</button>
                    <button >Next Slide</button>
                </div>
            </div>
        )
    }
    private buildSlide(slide: Slide) {
        switch(slide.type) {
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