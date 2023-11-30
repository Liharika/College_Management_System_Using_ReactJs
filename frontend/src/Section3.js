import React from 'react';
import Menu from './Menu';

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

function Section3() {
  return (
    <div style={sectionStyle}>
      <div style={leftSectionStyle}>
        <Menu />
      </div>
      <div style={rightSectionStyle}>
        <h2>College Instructions</h2>
        <p>
          Welcome to our college! Here are some important instructions for students:
        </p>
        <ul>
        <li>Follow the academic calendar for all important dates and deadlines.</li>
        <li>Attendance is mandatory for all classes and practical sessions.</li>
        <li>Submit assignments and projects on time to avoid late penalties.</li>
        <li>Adhere to the dress code specified by the college.</li>
        <li>Use the college library and online resources for research and study purposes.</li>
        <li>Participate in extracurricular activities and events organized by the college.</li>
        <li>Respect the faculty, staff, and fellow students.</li>
        <li>Strictly follow the anti-ragging policy of the college.</li>
        <li>Keep your identity cards with you at all times while on campus.</li>
        <li>Abide by the rules and regulations of the college governing academic conduct.</li>
      </ul>
      </div>
    </div>
  );
}

export default Section3;
