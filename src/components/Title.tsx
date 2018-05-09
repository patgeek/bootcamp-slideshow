import * as React from 'react';
import '../styles/Title.css';


interface Props {
    mainTitle: string;
    subTitle?: string;
}

class Title extends React.Component<Props> {
    public render() {
        return (
            <div>
                <h1 className="mainTitle">{this.props.mainTitle}</h1>
                { this.props.subTitle != null &&
                    <h2 className="subTitle">{this.props.subTitle}</h2>
                }
            </div>
        );
    }
}

export default Title;