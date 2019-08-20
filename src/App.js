import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <main>{this.props.children}</main>
            </div>
        );
    }
}

export default App;
