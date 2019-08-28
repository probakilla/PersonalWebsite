import React from 'react';
import SiteNavbar from '../components/SiteNavbar';
import ContactHeader from './ContactHeader';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <SiteNavbar />
                <ContactHeader />
            </div>
        );
    }
}

export default Contact;