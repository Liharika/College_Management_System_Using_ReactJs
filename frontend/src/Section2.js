import React from 'react';
import Menu from './Menu';
import RegistrationFormFaculty from './RegistrationFormFaculty'; 

const sectionStyle = {
  display: 'flex',
  height: '100vh',
};

const leftSectionStyle = {
  flex: 0.5,
  backgroundColor: 'cyan', 
  padding: '20px',
};

const rightSectionStyle = {
  flex: 3,
  backgroundColor: '#d0d0d0', 
  padding: '20px',
};

function Section2() {
  return (
    <div style={sectionStyle}>
      <div style={leftSectionStyle}>
        <Menu />
      </div>
      <div style={rightSectionStyle}>
        
        <RegistrationFormFaculty />
      </div>
    </div>
  );
}

export default Section2;
