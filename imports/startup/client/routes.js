import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../../react/components/App';
import HomePage from '../../react/components/HomePage/HomePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
    </Route>
)
