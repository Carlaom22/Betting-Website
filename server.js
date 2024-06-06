const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/betting', { useNewUrlParser: true, useUnifiedTopology: true });

const betSchema = new mongoose.Schema({
    team: String,
    amount: Number,
});

const Bet = mongoose.model('Bet', betSchema);

// Routes
app.get('/api/standings', (req, res) => {
    // This route can be used for additional data fetching if needed
    res.json({ message: 'Standings fetched' });
});

app.post('/api/bet', (req, res) => {
    const newBet = new Bet(req.body);
    newBet.save().then(bet => res.json(bet));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
