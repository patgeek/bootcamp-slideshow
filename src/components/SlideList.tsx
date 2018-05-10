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
            list.push(SlideButton(s));
        }
        return list;
    }
}

function SlideButton(slide: Slide) {
    return (
        <li><button className="slideButton">
            {slide.mainTitle}
        </button></li>
    )
}

export default SlideList;