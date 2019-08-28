import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from '../components/NotFound';
import { render } from '@testing-library/react';

describe('NotFound tests', () => {
    it('Render without crashing', () => {
        const div = document.createElement('div');
        expect(ReactDOM.render(<NotFound />, div));
    });

    it('Test button presence', () => {
        const { getByText } = render(<NotFound />);
        expect(getByText('Bring me back home')).toBeVisible();
    });

    it('Test button presence', () => {
        const { getByText } = render(<NotFound />);
        expect(getByText('Bring me back home')).toHaveAttribute('href', '/');
    });
});
