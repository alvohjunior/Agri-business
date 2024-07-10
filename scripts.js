// Example JavaScript for crop management
let crops = []; // Array to store crops

// Function to add a new crop
function addCrop(name, variety, area) {
  let crop = {
    id: Date.now(),
    name: name,
    variety: variety,
    area: area
  };
  crops.push(crop);
}

// Function to display crops
function displayCrops() {
  let tableBody = document.getElementById('cropTableBody');
  tableBody.innerHTML = ''; // Clear previous entries

  crops.forEach(crop => {
    let row = `<tr>
                <td>${crop.name}</td>
                <td>${crop.variety}</td>
                <td>${crop.area}</td>
                <td>
                  <button class="btn btn-danger btn-sm" onclick="deleteCrop(${crop.id})">Delete</button>
                </td>
              </tr>`;
    tableBody.innerHTML += row;
  });
}

// Function to delete a crop
function deleteCrop(id) {
  crops = crops.filter(crop => crop.id !== id);
  displayCrops(); // Refresh the displayed crops
}

// Example usage
addCrop('Wheat', 'Spring Wheat', '100 acres');
addCrop('Corn', 'Sweet Corn', '75 acres');
addCrop('Soybeans', 'Roundup Ready Soybeans', '120 acres');
displayCrops();




import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [crop, setCrop] = useState({});
    const [weather, setWeather] = useState({});

    useEffect(() => {
        axios.get('/crop')
            .then(response => setCrop(response.data))
            .catch(error => console.error('Error fetching crop data:', error));

        axios.get('/weather')
            .then(response => setWeather(response.data))
            .catch(error => console.error('Error fetching weather data:', error));
    }, []);

    return (
        <div>
            <h1>Crop Information</h1>
            <p>Name: {crop.name}</p>
            <p>Variety: {crop.variety}</p>
            <p>Planting Date: {crop.planting_date}</p>

            <h1>Weather Information</h1>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Humidity: {weather.humidity}%</p>
        </div>
    );
}

export default App;





const express = require('express');
const app = express();
const port = 3000;

// Example routes for crop and weather data
app.get('/crop', (req, res) => {
    // Logic to retrieve crop data
    res.json({ name: 'Wheat', variety: 'Winter Wheat', planting_date: '2024-04-01' });
});

app.get('/weather', (req, res) => {
    // Logic to retrieve weather data
    res.json({ temperature: 28, humidity: 55 });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
