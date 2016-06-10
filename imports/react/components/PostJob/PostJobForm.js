import React, { Component } from 'react';
import Radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';
import { Jobs } from '../../../collections/jobs';
import { Form, Field } from 'simple-react-form';
import { toastr } from 'react-redux-toastr'

const styles = {
    base: {
        height: 'calc(100vh - 64px)'
    },
    button: {
        marginTop: '30px'
    }
};

class PostJobForm extends Component {
    constructor(props) {
        super(props);

        //this.state = {
        //    jobTitle: ''
        //}
    }

    handleSubmit() {
        toastr.success('Job has been created !');
        //this.refs.postJobForm.submit()
    }

    render() {
        return (
            <div>
                <Form type="insert"
                      ref="postJobForm"
                      collection={Jobs} />
                <RaisedButton label="Create Job" onTouchTap={this.handleSubmit} style={styles.button} />
            </div>
        );
    }
}

export default Radium(PostJobForm);
