import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
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

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: open };
    }

    handleToggle() {
        console.log('hello')
    }

    //handleToggle = () => setState({ open: !this.state.open });

    render() {
        return (
            <div>
                <AppBar title="JobBoard Meteor"
                        zDepth={5}
                        iconElementLeft={<IconButton onTouchTap={this.handleToggle}><MenuIcon /></IconButton>} />
                <Drawer
                    docked={false}
                    width={500}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open: false})}>
                </Drawer>
            </div>
        );
    }
}

export default NavBar;
