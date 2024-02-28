require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');






mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);

}
);
db.once('open', () => {
    console.log('db connected');

}
);

const app = express();




const houses = require('./routes/houses');
app.use('/', houses);



app.listen(3000, () => {
  console.log('server started');
}
);