const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./Routes/projectRouter');
const actionsRouter = require('./Routes/actionRouters');

const server = express();

server.get('/', ( req,res ) => {
  res.send(`<h2>Let's Code</h2>`);
});
const middleware = [express.json(), helmet()]
// server.use(express.json());
// server.use(helmet());
server.use(middleware);
server.use('/api/projects', projectsRouter, actionsRouter);

module.exports = server;