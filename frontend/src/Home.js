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
  backgroundColor: '#003366', // Adjust the background color as needed
};

const bottomSectionStyle = {
  flex: 2,
  display: 'flex',
};

const leftSectionStyle = {
  flex: 0.5,
  backgroundColor:'#0066b5', // Adjust the background color as needed
  padding: '20px',
};

const rightSectionStyle = {
  flex: 3,
  backgroundColor: '#d0d0d0', // Adjust the background color as needed
  padding: '20px',
};

function Home() {
  return (
    <div style={homeStyle}>
      {/* Top Section */}
      <div style={topSectionStyle}>
        <h2>COLLEGE MANAGEMENT SYSTEM</h2>
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
            src="/cms1.jpg"
            alt="Description of the image"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
