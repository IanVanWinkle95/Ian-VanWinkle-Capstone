import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='HomePage'>
      <h1>Welcome to BeautyByyBai</h1>
      <nav>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
