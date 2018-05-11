import * as React from 'react';
import '../styles/SlideList.css';
import {Slide} from '../types/index';


export interface Props {
    slides: Slide[];
}

class SlideList extends React.Component<Props> {
    public render() {
        
        return (
            <div className="slideListBorder">
                Slide List
                <ul className="slideListContent">
                    {this.props.slides.map(s =>
                        <SlideButton key={s.id} {...s} />
                    )}
                </ul>
            </div>
        )
    }
}

const SlideButton: React.SFC<Slide> = (slide) => 
<li key={slide.id}><button className="slideButton">
            {slide.mainTitle}
        </button></li>

export default SlideList;