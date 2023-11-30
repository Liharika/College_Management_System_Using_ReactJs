import React from 'react';
import Menu from './Menu';
import RegistrationForm from './RegistrationForm'; // Import your registration form component

const sectionStyle = {
  display: 'flex',
  height: '100vh',
};

const leftSectionStyle = {
  flex: 0.5,
  backgroundColor: 'cyan', // Adjust the background color as needed
  padding: '20px',
};

const rightSectionStyle = {
  flex: 3,
  backgroundColor: '#d0d0d0', // Adjust the background color as needed
  padding: '20px',
};

function Section1() {
  return (
    <div style={sectionStyle}>
      {/* Left Section (Menu Bar) */}
      <div style={leftSectionStyle}>
        <Menu />
      </div>

      {/* Right Section (Registration Form) */}
      <div style={rightSectionStyle}>
        
        <RegistrationForm />
        {/* Add any other specific content for Section1 here */}
      </div>
    </div>
  );
}

export default Section1;



