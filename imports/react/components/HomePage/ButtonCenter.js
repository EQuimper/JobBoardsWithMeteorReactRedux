import React from 'react';
import { Link } from 'react-router';
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
            <Link to={'post-job'}><RaisedButton label="Post a Job" /></Link>
        </div>
    </div>
);

export default ButtonCenter;
