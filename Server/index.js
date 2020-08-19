const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = mongoose.connect('mongodb://127.0.0.1:27017/url-short', { useNewUrlParser: true });


connection.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });
const UrlRoutes = require('./routes/url')

require('./models/url');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api',UrlRoutes);

const PORT = 7000;
app.listen(PORT,()=>{
    console.log("server connected");
})