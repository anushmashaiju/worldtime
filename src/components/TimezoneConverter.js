import React, { useState } from 'react';
import moment from 'moment-timezone';
import Select from 'react-select';
import './TimezoneConverter.css';  // Import the CSS file

// Function to get time and date in a specific timezone
const getTimeForTimeZone = (timezone) => {
  return moment().tz(timezone).format('MMMM Do YYYY, hh:mm A');
};

const TimezoneConverter = () => {
  // List of countries and their timezones
  const countries = [
    { label: 'None', value: '' },
    { label: 'New York, USA', value: 'America/New_York' },
    { label: 'Los Angeles, USA', value: 'America/Los_Angeles' },
    { label: 'Chicago, USA', value: 'America/Chicago' },
    { label: 'London, UK', value: 'Europe/London' },
    { label: 'Paris, France', value: 'Europe/Paris' },
    { label: 'Berlin, Germany', value: 'Europe/Berlin' },
    { label: 'Rome, Italy', value: 'Europe/Rome' },
    { label: 'Moscow, Russia', value: 'Europe/Moscow' },
    { label: 'Beijing, China', value: 'Asia/Shanghai' },
    { label: 'Tokyo, Japan', value: 'Asia/Tokyo' },
    { label: 'Seoul, South Korea', value: 'Asia/Seoul' },
    { label: 'Delhi, India', value: 'Asia/Kolkata' },
    { label: 'Sydney, Australia', value: 'Australia/Sydney' },
    { label: 'Auckland, New Zealand', value: 'Pacific/Auckland' },
    { label: 'Honolulu, Hawaii', value: 'Pacific/Honolulu' },
    { label: 'Rio de Janeiro, Brazil', value: 'America/Sao_Paulo' },
    { label: 'Cairo, Egypt', value: 'Africa/Cairo' },
    { label: 'Dubai, UAE', value: 'Asia/Dubai' },
    // Add more countries as needed
  ];

  // State to hold selected country
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className="container1">
      <div className="select-country">
        <Select
          options={countries}
          value={selectedCountry}
          onChange={setSelectedCountry}
          placeholder="Select a country..."
        />
      </div>
      {selectedCountry && selectedCountry.value && (
        <div className="result1">
          <h2>{selectedCountry.label}</h2>
          <p>Current Date and Time: {getTimeForTimeZone(selectedCountry.value)}</p>
        </div>
      )}
      {selectedCountry && !selectedCountry.value && (
        <div className="result1">
          <h2>{selectedCountry.label}</h2>
          <p>No timezone selected.</p>
        </div>
      )}
    </div>
  );
};

export default TimezoneConverter;
