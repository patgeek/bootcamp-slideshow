import * as React from 'react';
import slides from './SlideFixtures';
import '../styles/SlideList.css';


class SlideList extends React.Component {
    public render() {
        return (
            <div className="slideListBorder">
                Slide List
            </div>
        )
    }

    private makeList() {
        let list = [];
        for (let s of slides) {
            list.push(s.mainTitle);
        }
        return list;
    }
}

export default SlideList;