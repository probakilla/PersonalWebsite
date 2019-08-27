import React from 'react';

import '../css/sizes.css';

class ExperienceEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            title: props.title,
            content: props.children
        }
    }

    render() {
        return(
            <div className="wow slideInRight">
                <h2>{this.state.post}</h2>
                <h3>{this.state.title}</h3>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default ExperienceEntry;