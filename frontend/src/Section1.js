import React from 'react';
import Menu from './Menu';
import RegistrationForm from './RegistrationForm'; 

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

function Section1() {
  return (
    <div style={sectionStyle}>
      <div style={leftSectionStyle}>
        <Menu />
      </div>
      <div style={rightSectionStyle}>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Section1;



