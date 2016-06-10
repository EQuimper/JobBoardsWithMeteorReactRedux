import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    base: {
        width: '600px'
    },
    button: {
        margin: '0 10px'
    }
};

const ButtonCenter = () => (
    <div style={styles.base} className="boxItemCenter">
        <div style={styles.button}>
            <RaisedButton label="Find a Job" primary={true} />
        </div>
        <div style={styles.button}>
            <RaisedButton label="Post a Job" />
        </div>
    </div>
);

export default ButtonCenter;
