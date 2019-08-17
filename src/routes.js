const express = require('express');

const routes = express.Router();

const TweetContoller = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets', TweetContoller.index);
routes.post('/tweets', TweetContoller.create);

routes.post('/likes/:id', LikeController.create);

module.exports = routes;
