import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Home from '../home/Home';

describe('Home tests', () => {
    it('Render without crashing', () => {
        const div = document.createElement('div');
        expect(ReactDOM.render(<Home />, div));
    });

    it('Test resume presence', () => {
        const { getByText } = render(<Home />);
        expect(getByText('My Resume')).toBeVisible();
    });

    it('Test resume button href', () => {
        const { getByText } = render(<Home />);
        expect(getByText('My Resume')).toHaveAttribute('href', '/resume');
    });
});