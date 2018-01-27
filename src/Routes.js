import React from 'react';
import {Route, Switch} from 'react-router-dom';

export default (
    <Switch>
        <Route path='/' />
        <Route path='/bins/:id' />
        <Route path='/bin/:id' />
        <Route path='/create' />
    </Switch>
)