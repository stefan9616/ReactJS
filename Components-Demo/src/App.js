import { useState } from 'react';
import './App.css';
import CarList from './components/CarList';
import Timer from './components/Timer';

function App() {

  const cars = [
    { make: "BMW", year: "2003", models: ["320d", "330d", "325i", "318i"] },
    { make: "Audi", year: "2002", models: ["A4", "A6", "A8", "A5"] },
    { make: "Mercedes", year: "2004", models: ["E-class", "C-class", "G-class", "S-class"] },
  ];

 
  return (
    <div className="App">
      

      <Timer start = {50}/>

      <CarList cars={cars} />

    </div>
  );
}

export default App;
