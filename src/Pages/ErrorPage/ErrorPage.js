import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import './ErrorPage.css';

const ErrorPage = () => {
    useTitle('Wrong Route');
    return (
        <div className='error-page'>
            <h1 className=' text-danger fw-bolder'>404</h1>
            <h2 className='text-primary' >Sorry! Wrong Route</h2>

            <Link className=' text-info text-decoration-none fw-bolder' to="/"> Go Home</Link>
        </div>
    );
};

export default ErrorPage;