import React, { useState } from 'react';
import moment from 'moment-timezone';
import './TimezoneCompare.css';

// Function to get time and date in a specific timezone
const getTimeForTimeZone = (timezone) => {
  return moment().tz(timezone).format('MMMM Do YYYY, hh:mm A');
};

const Timezone = () => {
  // List of countries and their timezones
  const countries = [
    { label: 'None', timezone: '' },
    { label: 'New York, USA', timezone: 'America/New_York' },
    { label: 'Los Angeles, USA', timezone: 'America/Los_Angeles' },
    { label: 'Chicago, USA', timezone: 'America/Chicago' },
    { label: 'London, UK', timezone: 'Europe/London' },
    { label: 'Paris, France', timezone: 'Europe/Paris' },
    { label: 'Berlin, Germany', timezone: 'Europe/Berlin' },
    { label: 'Rome, Italy', timezone: 'Europe/Rome' },
    { label: 'Moscow, Russia', timezone: 'Europe/Moscow' },
    { label: 'Beijing, China', timezone: 'Asia/Shanghai' },
    { label: 'Tokyo, Japan', timezone: 'Asia/Tokyo' },
    { label: 'Seoul, South Korea', timezone: 'Asia/Seoul' },
    { label: 'Delhi, India', timezone: 'Asia/Kolkata' },
    { label: 'Sydney, Australia', timezone: 'Australia/Sydney' },
    { label: 'Auckland, New Zealand', timezone: 'Pacific/Auckland' },
    { label: 'Honolulu, Hawaii', timezone: 'Pacific/Honolulu' },
    { label: 'Rio de Janeiro, Brazil', timezone: 'America/Sao_Paulo' },
    { label: 'Cairo, Egypt', timezone: 'Africa/Cairo' },
    { label: 'Dubai, UAE', timezone: 'Asia/Dubai' },
    // Add more countries as needed
  ];

  // State to hold selected countries and comparison result
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [result, setResult] = useState(null);

  // Function to handle comparison
  const handleCompare = () => {
    // Find the timezone strings for selected countries
    const timezone1 = countries.find(country => country.label === country1)?.timezone;
    const timezone2 = countries.find(country => country.label === country2)?.timezone;

    if (timezone1 && timezone2) {
      const time1 = getTimeForTimeZone(timezone1);
      const time2 = getTimeForTimeZone(timezone2);

      const comparisonResult =
        `Date and Time in :\n` + `${country1}: ${time1}\n` +
        `${country2}: ${time2}\n`;

      setResult(comparisonResult);
    } else {
      setResult('Please select two countries to compare.');
    }
  };

  return (
    <div className="container">
      <div className="select-container">
        <label>Country 1:</label>
        <select value={country1} onChange={(e) => setCountry1(e.target.value)}>
          <option value="">Select a country...</option>
          {countries.map((country) => (
            <option key={country.label} value={country.label}>
              {country.label}
            </option>
          ))}
        </select>
      </div>
      <div className="select-container">
        <label>Country 2:</label>
        <select value={country2} onChange={(e) => setCountry2(e.target.value)}>
          <option value="">Select a country...</option>
          {countries.map((country) => (
            <option key={country.label} value={country.label}>
              {country.label}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleCompare}>Compare</button>
      {result !== null && (
        <div className="result">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default Timezone;
