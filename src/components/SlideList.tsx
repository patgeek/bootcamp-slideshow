import * as React from 'react';
import '../styles/SlideList.css';
import {Slide} from '../types/index';


export interface Props {
    slides: Slide[];
    visited: number[];
    onChange: (id: number) => void;
}

class SlideList extends React.Component<Props> {
    public render() {
        
        return (
            <div className="slideListBorder">
                Slide List
                <ul className="slideListContent">
                    {this.props.slides.map(s =>
                        <SlideButton key={s.id} slide={s} visited={this.props.visited} onChange={this.props.onChange}/>
                    )}
                </ul>
            </div>
        )
    }
}

export interface ButtonProps {
    slide: Slide;
    visited: number[];
    onChange: (id: number) => void;
}

// const SlideButton: React.SFC<ButtonProps> = (props) => 
//     <li key={props.slide.id}>
//         <button className="slideButton" onClick={event => props.onChange(props.slide.id)}>{props.slide.mainTitle}</button>
//     </li>

function SlideButton({slide, visited, onChange}: ButtonProps) {
    if (visited.some(x => x === slide.id)) {
        return (
            <li key={slide.id}>
                <button className="slideButtonVisited" onClick={event => onChange(slide.id)}>
                    {slide.mainTitle}
                </button>
            </li>
        )
    } else {
        return (
            <li key={slide.id}>
                <button className="slideButton" onClick={event => onChange(slide.id)}>
                    {slide.mainTitle}
                </button>
            </li>
        )
    }
}

export default SlideList;