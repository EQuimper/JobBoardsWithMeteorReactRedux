import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';

import configureStore from '../imports/redux/store/configureStore';
import routes from '../imports/startup/client/routes';

const store = configureStore();

// Make the history work with browserHistory
export const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
);

Meteor.startup(() => {
    render(
        <Root />,
        document.getElementById('app')
    );
});
