import * as React from 'react';
import Title from './Title';
import Simple from './Simple';
import TwoCol from './TwoCol';
import {GenericSlide} from '../types/index';
import '../styles/Content.css';


export interface Props {
    slide: GenericSlide;
    numSlides: number;
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
                { this.buildNavBorder(this.props.numSlides) }
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
    private buildNavBorder(numSlides: number) {
        if (this.props.slide.id === 0) {
            return (
                <div className="navBorder">
                    <button hidden={true} onClick={this.props.onPrevious}>Previous Slide</button>
                    <button onClick={this.props.onNext}>Next Slide</button>
                </div>
            )
        } else if (this.props.slide.id === numSlides - 1) {
            return (
                <div className="navBorder">
                    <button onClick={this.props.onPrevious}>Previous Slide</button>
                    <button hidden={true} onClick={this.props.onNext}>Next Slide</button>
                </div>
            )
        } else {
            return (
                <div className="navBorder">
                    <button onClick={this.props.onPrevious}>Previous Slide</button>
                    <button onClick={this.props.onNext}>Next Slide</button>
                </div>
            )
        }
    }
}

export default Content;