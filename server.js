const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Portfolio')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const ContactSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Subject: String,
    Message: String
});

const ContactModel = mongoose.model('Contact', ContactSchema);

app.post('/contact', async (req, res) => {
    try{
        const data = await ContactModel.create(req.body);
        console.log(data);
        res.json('Submitted Successfully');
    }
    catch (error) {
        console.log(error);
        res.status(500).json('Error saving data');
    }
})

app.listen(5000, () => {
    console.log('Server running on port 5000');
})