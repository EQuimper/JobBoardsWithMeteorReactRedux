import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    base: {
        marginTop: '50px'
    },
    button: {
        backgroundColor: 'lightblue'
    }
};

const SignUpButton = () => (
    <div style={styles.base}>
        <RaisedButton label="Sign Up" secondary={true} />
    </div>
);

export default SignUpButton;
