const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://projects:projects@cluster0-uxlnd.mongodb.net/twitter?retryWrites=true&w=majority', 
{
    useNewUrlParser: true    
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3000);