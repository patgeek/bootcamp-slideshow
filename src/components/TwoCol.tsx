import * as React from 'react';


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
                <pre className="leftcol">{this.props.leftcol}</pre>
                <pre className="rightcol">{this.props.rightcol}</pre>
            </div>
        );
    }
}

export default TwoCol;