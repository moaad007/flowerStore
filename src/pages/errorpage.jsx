import React from 'react';
import Nav from '../../components/Nav';
const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Nav />
            <h1>404</h1>
            <p>Page Not Found</p>
        </div>
    );
};

export default ErrorPage;