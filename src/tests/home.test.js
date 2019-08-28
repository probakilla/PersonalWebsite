import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home/Home';

describe('Home tests', () => {
    it('Render without crashing', () => {
        const div = document.createElement('div');
        expect(ReactDOM.render(<Home />, div));
    })
})