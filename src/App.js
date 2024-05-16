// src/App.js
import React from 'react';

import './App.css'; 

import OpenStreetMap from './components/OpenStreetMap';
import TimezoneConverter from './components/TimezoneConverter';
import Timezone from './components/TimezoneCompare';

function App() {
  return (
    <div>
     <h1>World Time</h1>
      <TimezoneConverter/>
      <Timezone/>
      <OpenStreetMap />
    </div>
  );
}

export default App;
