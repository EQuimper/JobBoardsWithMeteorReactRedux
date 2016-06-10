import React from 'react';
import ButtonCenter from './ButtonCenter';
import RaisedButton from 'material-ui/RaisedButton';
import Create from 'material-ui/svg-icons/content/create';

const styles = {
    base: {
        flexDirection: 'column',
        height: 'calc(100vh - 64px)',
        width: '100%',
        backgroundImage: 'url(https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=cffce9bd4caba642d5c73117cd5953dc)',
        backgroundSize: 'cover',
        backgroundBlendMode: 'luminosity',
        backgroundColor: 'lightcyan'
    },
    title: {
        fontFamily: 'cursive',
        fontSize: '-webkit-xxx-large',
        color: 'white',
        textShadow: '2px 2px 2px black'
    },
    signUp: {
        marginTop: '50px'
    }
};

const HomePage = () => (
    <div className="boxItemCenter" style={styles.base}>
        <div>
            <h1 style={styles.title}>JobBoard Meteor</h1>
        </div>
        <ButtonCenter />
        <div style={styles.signUp}>
            <RaisedButton label="Sign Up"
                          icon={<Create />}
                          secondary={true} />
        </div>
    </div>
);

export default HomePage;
