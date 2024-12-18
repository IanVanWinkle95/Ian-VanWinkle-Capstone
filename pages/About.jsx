import React from 'react';
import '../src/App.css';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div className='AboutPage'>
            <h1>About Me</h1>
            <p>This is the about page.</p>
            <Link to="/Home">Back to Home</Link>
        </div>
    )
}