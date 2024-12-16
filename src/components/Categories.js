import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Link 추가
import './Categories.css';

const Categories = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (container) {
      const { left, width } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const walk = (x / width) * container.scrollWidth;
      container.scrollLeft = walk;
    }
  };

  return (
    <div>
      <div className="categories-container">
        <h2>Categories</h2>
        <div className="cards-wrapper" ref={containerRef} onMouseMove={handleMouseMove}>
          <div className="cards-container">
            <div className="card">
              <Link to="/vr-tour">
                <img src="media/ai-generated-8630221_1280.jpg" alt="VR Tour" />
                <h3>VR Tour</h3>
                <p>Explore virtual worlds</p>
              </Link>
            </div>
            <div className="card">
              <img src="media/ai-generated-8363656_1280.png" alt="Ebooks" />
              <h3>Ebooks</h3>
              <p>Open the world of knowledge</p>
            </div>
            <div className="card">
              <img src="media/generated-7577945_1280.jpg" alt="Research Papers" />
              <h3>Research Papers</h3>
              <p>Lets reveal mystery</p>
            </div>
            <div className="card">
              <img src="media/camera-1130731_1280.jpg" alt="Images" />
              <h3>Images</h3>
              <p>One look at moments</p>
            </div>
            <div className="card">
              <img src="media/cinema-4153289_1280.jpg" alt="Videos" />
              <h3>Videos</h3>
              <p>Captured moments</p>
            </div>
            <div className="card">
              <img src="media/ai-generated-8846983_1280.jpg" alt="Story Talks" />
              <h3>Story Talks</h3>
              <p>Unsung stories</p>
            </div>
            <div className="card">
              <img src="media/ai-generated-8846983_1280.jpg" alt="Story Talks" />
              <h3>add new</h3>
              <p>Unsung stories</p>
            </div>
            <div className="card">
              <img src="media/ai-generated-8846983_1280.jpg" alt="Story Talks" />
              <h3>add new</h3>
              <p>Unsung stories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight Section */}
      <div className="spotlights-section">
        <a href="/spotlights">
          <img src="media/spotlight3.jpg" alt="Spotlight 3" className="spotlight-image" />
        </a>
      </div>
    </div>
  );
};

export default Categories;
