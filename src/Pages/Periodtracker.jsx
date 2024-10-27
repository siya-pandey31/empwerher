// PeriodTracker.js
import React, { useState } from 'react';
import './CSS/Periodtracker.css'; // Create a CSS file for styling

const PeriodTracker = () => {
  const [periodData, setPeriodData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddPeriod = (e) => {
    e.preventDefault();
    if (startDate && endDate) {
      setPeriodData([...periodData, { startDate, endDate }]);
      setStartDate('');
      setEndDate('');
    }
  };

  return (
    <div className="period-tracker">
      <h1>Period Tracker</h1>
      <form onSubmit={handleAddPeriod}>
        <div>
          <label>Start Date:</label>
          <input 
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>End Date:</label>
          <input 
            type="date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Period</button>
      </form>
      <h2>Tracked Periods</h2>
      <ul>
        {periodData.map((period, index) => (
          <li key={index}>
            From {period.startDate} to {period.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeriodTracker;
