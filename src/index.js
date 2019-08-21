import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import * as serviceWorker from './serviceWorker';

import Home from './home/Home';
import Contact from './contact/Contact';
import Resume from './resume/Resume';
import About from './about/About';
import NotFound from './components/NotFound';
//https://codeburst.io/getting-started-with-react-router-5c978f70df91 tuto routes
const routing = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/resume' component={Resume} />
                <Route path='/about' component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
