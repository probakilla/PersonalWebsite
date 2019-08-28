import React from 'react';
import Button from 'react-bootstrap/Button';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <div className='area'>
                    <ul className='circles'>
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                </div>
                <div className='context'>
                    <h1>404 NOT FOUND ...</h1>
                    <Button variant='link' className='site-btn text-center' href='/'>
                        Bring me back home
                    </Button>
                </div>
            </div>
        );
    }
}

export default NotFound;
