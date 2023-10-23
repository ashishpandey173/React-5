// src/components/AgeCalculator.js

import React, { useState } from 'react';
import "./AgeCalculator.css"
function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(ageInYears.toFixed(2));
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      /><br/><br/>
      <button className="calculate-button" onClick={calculateAge}>
        Calculate Age
      </button>
      <h2>Your are {age} years old</h2>
    </div>
  );
}

export default AgeCalculator;
