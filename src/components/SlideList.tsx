import * as React from 'react';
import slides from './SlideFixtures';
import '../styles/SlideList.css';
import {Slide} from '../types/index';


class SlideList extends React.Component {
    public render() {
        const buttons = this.makeList();
        return (
            <div className="slideListBorder">
                Slide List
                <ul className="slideListContent">
                    { buttons }
                </ul>
            </div>
        )
    }

    private makeList() {
        const list = [];
        for (const s of slides) {
            list.push(slideButton(s));
        }
        return list;
    }
}

function slideButton(slide: Slide) {
    return (
        <li key={slide.id}><button className="slideButton">
            {slide.mainTitle}
        </button></li>
    )
}

export default SlideList;