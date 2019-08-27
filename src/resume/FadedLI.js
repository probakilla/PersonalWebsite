import React from 'react';

class FadedLI extends React.Component {
    constructor(props) {
        super(props);
        const content = (props.text !== undefined) ? props.text : props.children;
        this.state = {
            text: content
        };
    }

    render() {
        return <li className='wow fadeInDown'><p>{this.state.text}</p></li>;
    }
}

export default FadedLI;
