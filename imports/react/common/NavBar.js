import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const styles = {
    base: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        color: '#212121'
    },
    title: {
        color: '#212121'
    }
};

const NavBar = () => (
    <AppBar title="JobBoard Meteor"
            zDepth={5}
            iconElementLeft={<IconButton><MenuIcon /></IconButton>} />
);

export default NavBar;
