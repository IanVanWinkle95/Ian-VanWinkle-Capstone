import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


export default function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero-section">
        <h1>BeautyByyBai</h1>
        <p>Where beauty meets creativity.</p>
        <Link to="/services" className="cta-button">Explore my Services</Link>
      </header>

      <section className="about-section">
        <h2>Welcome to BeautyByyBai</h2>
        <p>My name is Bailey Smith, and I attended cosmetology school from August 2021 to June 2022 
          at Empire Beauty School. During my time there, I learned so many amazing things that have 
          shaped me into the professional I am today. I specialize in blonding, coloring, waxing, 
          women’s cuts, special occasion makeup and hair, as well as styling hair. I currently work 
          from home 2-3 days a week, and within the next year, I plan to transition to a salon 
          called [Salon Name]. I am also considering getting certified in extensions and laser hair 
          treatments in the future. My passion is helping people feel beautiful and empowering them 
          to be their best selves.</p>
      </section>

      <section className="contact-section">
        <h2>Ready to Book?</h2>
        <p>Visit my <Link to="/contact">Contact page</Link> to book your appointment and find more information about our location.</p>
      </section>
    </div>
  );
}
