import * as React from 'react';


interface Props {
    mainTitle: string;
    body: string;
}

class Simple extends React.Component<Props> {
    public render() {
        return (
            <div>
                <h1 className="mainTitle">{this.props.mainTitle}</h1>
                <p className="body">{this.props.body}</p>
            </div>
        );
    }
}

export default Simple;