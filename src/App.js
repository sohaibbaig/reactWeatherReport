import React from 'react';
import './App.css';
import HeaderPart from './jsFiles/HeaderPart';
import WeatherSearch from './jsFiles/WeatherSearch';

function App() {
  return (
    <div className="App">
      <HeaderPart />
      <WeatherSearch />
    </div>
  );
}

export default App;
