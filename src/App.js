import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Login'; // Import the Login component
import MapComponent from './MapComponent'; // Ensure this is the correct path

const categories = [
  { name: 'VR Tour', description: 'Explore virtual tours', image: '/images/vr-tour.jpg' },
  { name: 'Ebooks', description: 'Download Ebooks', image: '/images/ebooks.jpg' },
  { name: 'Images', description: 'One look is worth...', image: '/images/images.jpg' },
  { name: 'Videos', description: 'Captured moments', image: '/images/videos.jpg' },
  { name: 'Story Talks', description: 'Unveiling stories', image: '/images/stories.jpg' },
  { name: 'Add New', description: 'Uncategorized', image: '/images/add-new.jpg' },
];

// Heritage sites data
const heritageSites = [
  { name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', image: '/images/tajmahal.jpg' },
  { name: 'Agra Fort', location: 'Agra, Uttar Pradesh', image: '/images/agrafort.jpg' },
  { name: 'Fatehpur Sikri', location: 'Fatehpur Sikri, Uttar Pradesh', image: '/images/fatehpursikri.jpg' },
  { name: 'Ajanta Caves', location: 'Aurangabad, Maharashtra', image: '/images/ajantacaves.jpg' },
  { name: 'Ellora Caves', location: 'Aurangabad, Maharashtra', image: '/images/elloracaves.jpg' },
  { name: 'Chhatrapati Shivaji Terminus', location: 'Mumbai, Maharashtra', image: '/images/chhatrapati.jpg' },
  { name: 'Elephanta Caves', location: 'Mumbai, Maharashtra', image: '/images/elephanta.jpg' },
  { name: 'Victorian and Art Deco Ensembles of Mumbai', location: 'Mumbai, Maharashtra', image: '/images/victorian.jpg' },
];

// HomePage component
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter heritage sites based on the search term
  const filteredSites = heritageSites.filter((site) =>
    site.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main">
      {/* Taj Mahal Image Section */}
      <div className="taj-mahal-section">
        <img className="taj-mahal-img" src="/images/tajmahal.jpg" alt="Taj Mahal" />
      </div>

      {/* Explore Now Section */}
      <div className="explore-now">
        <h2>Explore Now</h2>
        <input
          type="text"
          placeholder="Search heritage sites..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categories Section */}
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

      {/* Banner Section */}
      <div className="banner">
        <img src="/images/durga-puja-banner.jpg" alt="Current Events: Durga Puja" />
      </div>

      {/* Heritage Sites Search Section */}
      <section className="heritage-sites">
        <h2>Heritage Sites</h2>
        <div className="heritage-cards">
          {filteredSites.length > 0 ? (
            filteredSites.map((site, index) => (
              <div key={index} className="heritage-card">
                <img src={site.image} alt={site.name} />
                <h3>{site.name}</h3>
                <p>{site.location}</p>
              </div>
            ))
          ) : (
            <p>No heritage sites found.</p>
          )}
        </div>
      </section>

      {/* Map Section */}
      <div className="map-section">
        <h2>Explore Heritage Sites on the Map</h2>
        <MapComponent />
      </div>
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Digital Heritage</h1>
          <div className="language-login">
            <button>Language</button>
            <Link to="/login">
              <button>Log In</button>
            </Link> {/* Link to login page */}
          </div>
        </header>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
