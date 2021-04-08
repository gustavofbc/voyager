import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Apresentation from './pages/Apresentation';
import Hosting from './pages/Hosting';

export default function Routes() {
    return (
        <BrowserRouter>    
            <Switch>
                <Route path="/" exact component={Apresentation}/>
                <Route path="/hosting" exact component={Hosting}/>
            </Switch>
        </BrowserRouter>
    );
}