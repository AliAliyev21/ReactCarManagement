import React, { useState } from 'react';
import './Main.css';

function Main({ cars, addOrUpdateCar }) {
  const [carData, setCarData] = useState({ id: '', model: '', vendor: '', price: '', imageUrl: '' });
  const [isUpdate, setIsUpdate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleAdd = () => {
    addOrUpdateCar(carData);
    setCarData({ id: '', model: '', vendor: '', price: '', imageUrl: '' });
    setIsUpdate(false);
  };

  const handleUpdate = () => {
    addOrUpdateCar(carData);
    setCarData({ id: '', model: '', vendor: '', price: '', imageUrl: '' });
    setIsUpdate(false);
  };

  const handleEdit = (car) => {
    setCarData(car);
    setIsUpdate(true);
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <label>ID:</label>
        <input type="text" name="id" value={carData.id} onChange={handleChange} disabled={isUpdate} />
        <label>Model:</label>
        <input type="text" name="model" value={carData.model} onChange={handleChange} />
        <label>Vendor:</label>
        <input type="text" name="vendor" value={carData.vendor} onChange={handleChange} />
        <label>Price:</label>
        <input type="text" name="price" value={carData.price} onChange={handleChange} />
        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={carData.imageUrl} onChange={handleChange} />
        <button onClick={handleAdd} disabled={isUpdate}>Add</button>
        <button onClick={handleUpdate} disabled={!isUpdate}>Update</button>
      </div>
      <div className="car-list">
        {cars.map((car) => (
          <div key={car.id} className="car-item">
            <img src={car.imageUrl} alt={car.model} />
            <div>ID: {car.id}</div>
            <div>Model: {car.model}</div>
            <div>Vendor: {car.vendor}</div>
            <div>Price: {car.price}</div>
            <button onClick={() => handleEdit(car)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
