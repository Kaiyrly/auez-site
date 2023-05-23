import React from 'react';
import ClassContent from '../components/ClassContent';
import '../styles/ClassPage.css'; 

function ClassPage() {
  return (
    <div className="class-page">
      <div className="background"></div> {/* Add a div for the background */}
      <ClassContent /> {/* Add the ClassContent component */}
    </div>
  );
}

export default ClassPage;
