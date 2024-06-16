const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.LS89S3B  , ( 9471 -elka)
env.PORT || 5000;
const MONGODB_URI = '';

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Lawyer Schema and Model
const lawyerSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  location: String,
  contact: String,
  // Add more fields as needed
});
const Lawyer = mongoose.model('Lawyer', lawyerSchema);

// API Routes
// Example route to fetch all lawyers
app.get('/api/lawyers', async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.json(lawyers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example route to create a new lawyer
app.post('/api/lawyers', async (req, res) => {
  try {
    const { name, specialization, location, contact } = req.body;
    const newLawyer = new Lawyer({ name, specialization, location, contact });
    await newLawyer.save();
    res.status(201).json(newLawyer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
