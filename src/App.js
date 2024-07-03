import React, { useState } from 'react';
import NaviBar from './components/NaviBar';
import Main from './components/Main';
import './App.css';

function App() {
  const [cars, setCars] = useState([]);

  const addOrUpdateCar = (car) => {
    setCars((prevCars) => {
      const index = prevCars.findIndex((c) => c.id === car.id);
      if (index !== -1) {
        const updatedCars = [...prevCars];
        updatedCars[index] = car;
        return updatedCars;
      } else {
        return [...prevCars, car];
      }
    });
  };

  return (
    <div className="App">
      <NaviBar />
      <Main cars={cars} addOrUpdateCar={addOrUpdateCar} />
    </div>
  );
}

export default App;
