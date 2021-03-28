import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Apresentation from './pages/Apresentation';

export default function Routes() {
    return (
        <BrowserRouter>    
            <Switch>
                <Route path="/" exact component={Apresentation}/>
            </Switch>
        </BrowserRouter>
    );
}