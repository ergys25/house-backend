require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');






mongoose.connect("mongodb+srv://ergys:ergys@cluster0.cmvbncv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
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