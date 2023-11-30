import React from 'react';
import Menu from './Menu';

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

const topSectionStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#3498db', // Background color for the top section
  color: '#fff', // Text color for the top section
};

const bottomSectionStyle = {
  flex: 2,
  display: 'flex',
};

const leftSectionStyle = {
  flex: 0.5,
  backgroundColor: '#2ecc71', // Background color for the left section
  padding: '20px',
};

const rightSectionStyle = {
  flex: 1.5,
  backgroundColor: '#e74c3c', // Background color for the right section
  padding: '20px',
};

function Home() {
  return (
    <div style={homeStyle}>
      {/* Top Section */}
      <div style={topSectionStyle}>
        <h2>Welcome to the Home Page</h2>
      </div>

      {/* Bottom Section */}
      <div style={bottomSectionStyle}>
        {/* Left Section (Menu Bar) */}
        <div style={leftSectionStyle}>
          <Menu />
        </div>

        {/* Right Section (Image Display) */}
        <div style={rightSectionStyle}>
          {/* Add your image component or content here */}
          <img
            src="/path/to/your/image.jpg"
            alt="Description of the image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
