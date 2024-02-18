import React, { useState } from 'react';
import './FrontStyles.css';     

const Front = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='b-container'>
      <div className='heading'>
        <h2>Skills & Projects</h2>
        <div className='section'>
          <h3 onClick={toggleExpand}>Web Development </h3>
          {isExpanded && (
            <div className='expanded-content'>
              <p>I am a fresher website developer. I have acquired skills through self-learning. Here are some projects I've worked on Next js Now,I work on many real world Projects:</p>
              <ul>
                <li>E-Commerce Website</li>
                <li>Weather App</li>
                <li>Todo App</li>
                <li>Quiz app</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Front;

