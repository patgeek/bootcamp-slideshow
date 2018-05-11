import * as React from 'react';
import Title from './Title';
import Simple from './Simple';
// import TwoCol from './TwoCol';
import {Slide} from '../types/index';
import '../styles/Content.css';


export interface Props {
    slide: Slide;
    onChange: (id: number) => void;
    onNext: () => void;
    onPrevious: () => void;
}

class Content extends React.Component<Props> {
    public render() {
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
        )
    }
    private buildSlide(slide: Slide) {
        switch(slide.type) {
            case "TITLE":
                return (
                    <Title mainTitle={this.props.slide.mainTitle}
                        subTitle={this.props.slide.subTitle}
                    />
                );
            case "SIMPLE":
                return (
                    <Simple mainTitle={this.props.slide.mainTitle}
                        body={this.props.slide.body}
                    />
                );

            // case "TWOCOL":
            //     return (
            //         <TwoCol mainTitle={this.props.slide.mainTitle}
            //             leftcol={this.props.slide.leftcol}
            //             rightcol={this.props.slide.rightcol}
            //         />
            //     );
            default:
                return (
                    <Title mainTitle={this.props.slide.mainTitle}
                        subTitle={this.props.slide.subTitle}
                    />
                );
        }
    }
}

export default Content;