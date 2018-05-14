import * as React from 'react';
import '../styles/TwoCol.css';


interface Props {
    mainTitle: string;
    leftcol: string;
    rightcol: string;
}

class TwoCol extends React.Component<Props> {
    public render() {
        return (
            <div>
                <h1 className="mainTitle">{this.props.mainTitle}</h1>
                <p className="leftcol">{this.props.leftcol}</p>
                <p className="rightcol">{this.props.rightcol}</p>
            </div>
        );
    }
}

export default TwoCol;