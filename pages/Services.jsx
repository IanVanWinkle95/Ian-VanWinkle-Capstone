import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
    return (
        <div className='ServicesPage'>
            <h1>Services Page</h1>
            <p>Welcome to our services page!</p>
            <Link to="/Home">Back to Home</Link>
        </div>
    )
}