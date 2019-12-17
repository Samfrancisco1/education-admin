const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

const Admins = require('./routes/Admins');

app.use('/admins', Admins);

app.listen(PORT, () => {
    console.log('Server is running on port: '+ PORT);
    
});


