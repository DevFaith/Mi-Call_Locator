const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to the MiCall Backend!");
});

// Endpoint to handle joining waitlist
app.post('/join-waitlist', (req, res) => {
    const { email } = req.body;
    // Add logic to save email to database (for now, just log it)
    console.log(`User joined waitlist: ${email}`);
    res.status(200).json({ message: 'Waitlist joined successfully' });
});

// Endpoint to handle emergency alert
app.post('/emergency-alert', (req, res) => {
    const { location, type } = req.body;
    console.log(`Emergency Alert! Type: ${type}, Location: ${location}`);
    res.status(200).json({ message: 'Emergency alert sent' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
