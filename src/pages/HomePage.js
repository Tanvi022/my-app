import React, { useState } from 'react';
import './HomePage.css'; // Create a separate CSS file for HomePage styles if needed

const categories = [
  { name: 'VR Tour', description: 'Explore virtual tours', image: 'vr-tour.jpg' },
  { name: 'Ebooks', description: 'Download Ebooks', image: 'ebooks.jpg' },
  { name: 'Images', description: 'One look is worth...', image: 'images.jpg' },
  { name: 'Videos', description: 'Captured moments', image: 'videos.jpg' },
  { name: 'Story Talks', description: 'Unveiling stories', image: 'stories.jpg' },
  { name: 'Add New', description: 'Uncategorized', image: 'add-new.jpg' },
  { name: 'Podcasts', description: 'Listen to heritage stories', image: 'podcasts.jpg' },
  { name: 'Interactive Maps', description: 'Explore heritage sites on maps', image: 'maps.jpg' },
  { name: 'Virtual Exhibits', description: 'Experience virtual museum exhibits', image: 'exhibits.jpg' },
];

const heritageSites = [
  { name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', image: 'tajmahal.jpg' },
  { name: 'Agra Fort', location: 'Agra, Uttar Pradesh', image: 'agrafort.jpg' },
  { name: 'Fatehpur Sikri', location: 'Fatehpur Sikri, Uttar Pradesh', image: 'fatehpursikri.jpg' },
  { name: 'Ajanta Caves', location: 'Aurangabad, Maharashtra', image: 'ajantacaves.jpg' },
  { name: 'Ellora Caves', location: 'Aurangabad, Maharashtra', image: 'elloracaves.jpg' },
  { name: 'Chhatrapati Shivaji Terminus', location: 'Mumbai, Maharashtra', image: 'chhatrapati.jpg' },
  { name: 'Elephanta Caves', location: 'Mumbai, Maharashtra', image: 'elephanta.jpg' },
  { name: 'Victorian and Art Deco Ensembles of Mumbai', location: 'Mumbai, Maharashtra', image: 'victorian.jpg' },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter heritage sites based on search term
  const filteredSites = heritageSites.filter((site) =>
    site.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <header className="header">
        <h1>Digital Heritage</h1>
        <div className="language-login">
          <button>Language</button>
          <button>Log In</button>
        </div>
      </header>

      <div className="main">
        <img className="background-img" src="tajmahal.jpg" alt="Taj Mahal" />
        
        <div className="search-section">
          <h2>Explore Now</h2>
          <input
            type="text"
            placeholder="Search heritage sites..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="cards">
            {filteredSites.map((site, index) => (
              <div key={index} className="card">
                <img src={site.image} alt={site.name} />
                <h3>{site.name}</h3>
                <p>{site.location}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="categories">
          <h2>Categories</h2>
          <div className="category-cards">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="banner">
          <img src="durga-puja-banner.jpg" alt="Current Events: Durga Puja" />
        </div>

        <section className="heritage-sites">
          <h2>Heritage Sites</h2>
          <div className="heritage-cards">
            {heritageSites.map((site, index) => (
              <div key={index} className="heritage-card">
                <img src={site.image} alt={site.name} />
                <h3>{site.name}</h3>
                <p>{site.location}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
