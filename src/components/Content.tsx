import * as React from 'react';
import Title from './Title';
import Simple from './Simple';
import TwoCol from './TwoCol';
import {GenericSlide} from '../types/index';
import '../styles/Content.css';


export interface Props {
    slide: GenericSlide;
    onChange: (id: number) => void;
    onNext: () => void;
    onPrevious: () => void;
    onVisited: () => void;
}

class Content extends React.Component<Props> {
    public render() {
        this.props.onVisited();
        return (
            <div className="contentBorder">
                <div className="slideBorder">
                    { this.buildSlide(this.props.slide) }
                </div>
                <div className="navBorder">
                    <button onClick={this.props.onPrevious}>Previous Slide</button>
                    <button onClick={this.props.onNext}>Next Slide</button>
                </div>
            </div>
        );
    }
    private buildSlide(slide: GenericSlide) {
        switch(slide.type) {
            case "TITLE":
                return (
                    <Title mainTitle={slide.mainTitle}
                        subTitle={slide.subTitle}
                    />
                );
            case "SIMPLE":
                return (
                    <Simple mainTitle={slide.mainTitle}
                        body={slide.body}
                    />
                );

            case "TWOCOL":
                return (
                    <TwoCol mainTitle={slide.mainTitle}
                        leftcol={slide.leftcol}
                        rightcol={slide.rightcol}
                    />
                );
            default:
                return (
                    <Title mainTitle="No Slide Type"
                        subTitle=""
                    />
                );
        }
    }
}

export default Content;