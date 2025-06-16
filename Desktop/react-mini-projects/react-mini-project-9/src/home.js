import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <a href="/sports" className="cta-button">Shop Now</a>
      </header>

      <section className="feature">
        <div className="feature-text">
          <h2>Unleash Your Potential</h2>
          <p>Explore the latest collection of sportswear and shoes designed for performance and comfort.</p>
          <a href="/sports" className="secondary-button">Explore</a>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4H_rfSxInfcNdILDPRAXV8cP_GGmamKY2t-YSph3HRoHmnCWPd-_qEMMm032L32iLfjo&usqp=CAU" alt="Nike Banner" />
      </section>
    </div>
  );
}

export default Home;
