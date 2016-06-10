import React from 'react';
import PostJobForm from './PostJobForm';

const styles = {
    title: {
        textAlign: 'center',
        marginTop: '40px'
    },
    base: {
        height: '600px'
    }
};

const PostJobPage = () => (
    <div>
        <h2 style={styles.title}>Post a new job</h2>
        <div className="boxItemCenter" style={styles.base}>
            <PostJobForm />
        </div>
    </div>
);

export default PostJobPage;
