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
                <pre className="body">{this.props.body}</pre>
            </div>
        );
    }
}

export default Simple;