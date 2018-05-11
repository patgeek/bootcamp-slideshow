import * as React from 'react';
import '../styles/SlideList.css';
import {Slide} from '../types/index';


export interface Props {
    slides: Slide[];
    onChange: (id: number) => void;
    onNext: () => void;
    onPrevious: () => void;
}

class SlideList extends React.Component<Props> {
    public render() {
        
        return (
            <div className="slideListBorder">
                Slide List
                <ul className="slideListContent">
                    {this.props.slides.map(s =>
                        <SlideButton key={s.id} slide={s} onChange={this.props.onChange}/>
                    )}
                </ul>
            </div>
        )
    }
}

export interface ButtonProps {
    slide: Slide;
    onChange: (id: number) => void;
}

const SlideButton: React.SFC<ButtonProps> = (props) => 
    <li key={props.slide.id}>
        <button className="slideButton" onClick={event => props.onChange(props.slide.id)}>{props.slide.mainTitle}</button>
    </li>

export default SlideList;