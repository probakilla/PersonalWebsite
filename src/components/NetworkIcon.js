import React from 'react';

import '../css/sizes.css';

class NetworkIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.src,
            href: props.href,
            alt: props.alt
        };
    }

    render() {
        return (
            <a href={this.state.href} >
                <img className='network-icon-big' src={this.state.src} alt={this.state.alt} />
            </a>
        );
    }
}

export default NetworkIcon;
