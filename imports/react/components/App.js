import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

// Material-Ui Need
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { myTheme } from '../common/theme';

import NavBar from '../common/NavBar';

injectTapEventPlugin();

const styles = {
    base: {
        fontFamily: 'Roboto, sans-serif'
    }
};

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div>
                    <NavBar />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

const { object } = PropTypes;

App.propTypes = {
    children: object.isRequired
};

export default Radium(App);
