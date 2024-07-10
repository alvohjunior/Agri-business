const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS) from the 'public' directory
app.use(express.static('public'));

// Body parser middleware to handle POST request data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Store crops data in memory (replace with database in production)
let crops = [];

// Route to get all crops
app.get('/api/crops', (req, res) => {
  res.json(crops);
});

// Route to add a new crop
app.post('/api/crops', (req, res) => {
  const newCrop = {
    id: Date.now(),
    name: req.body.name,
    variety: req.body.variety,
    area: req.body.area
  };
  crops.push(newCrop);
  res.status(201).json(newCrop);
});

// Route to delete a crop by ID
app.delete('/api/crops/:id', (req, res) => {
  crops = crops.filter(crop => crop.id !== parseInt(req.params.id));
  res.status(200).json({ msg: 'Crop deleted' });
});

// Serve index.html for all other routes (SPA behavior)
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS, JavaScript) from the 'public' directory
app.use(express.static('public'));

// Body parser middleware to handle POST request data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Store crops data in memory (replace with database in production)
let crops = [];

// Route to get all crops
app.get('/api/crops', (req, res) => {
  res.json(crops);
});

// Route to add a new crop
app.post('/api/crops', (req, res) => {
  const newCrop = {
    id: Date.now(),
    name: req.body.name,
    variety: req.body.variety,
    area: req.body.area
  };
  crops.push(newCrop);
  res.status(201).json(newCrop);
});

// Route to delete a crop by ID
app.delete('/api/crops/:id', (req, res) => {
  crops = crops.filter(crop => crop.id !== parseInt(req.params.id));
  res.status(200).json({ msg: 'Crop deleted' });
});

// Serve index.html for all other routes (SPA behavior)
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
