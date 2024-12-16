import React from 'react';
import './Spotlights.css'; // Ensure you import the CSS file

const Spotlights = () => {
  // Placeholder data for events; you can later fetch this from an API or database
  const events = [
    {
      title: "Diwali Festival",
      description: "Celebrate the festival of lights in India.",
      image: "media/diwali.jpg",
    },
    {
      title: "Holi Celebration",
      description: "Experience the festival of colors with vibrant celebrations.",
      image: "media/holi.jpg",
    },
    {
      title: "Ganesh Chaturthi",
      description: "Join in the festive spirit of Ganesh Chaturthi.",
      image: "media/ganesh.jpg",
    },
    {
      title: "Independence Day",
      description: "Commemorate the Independence of India with grand events.",
      image: "media/independence.jpg",
    },
  ];

  return (
    <div className="spotlights-container">
      <h1 className="spotlights-title">Events</h1>

      {/* Events Grid */}
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-tile" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
            </div>

            {/* Hover Overlay with more details */}
            <div className="event-overlay">
              <div className="overlay-content">
                <h3 className="overlay-title">{event.title}</h3>
                <p className="overlay-description">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Map Section */}
      <div className="map-section">
        <h2 className="map-title">INTERACTIVE MAP</h2>
        <div className="map-container">
          {/* Placeholder for the interactive map */}
          <div className="map-placeholder">Interactive map coming soon...</div>
        </div>
      </div>
    </div>
  );
};

export default Spotlights;
