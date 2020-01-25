const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./Routes/projectRouter');

const server = express();

server.get('/', ( req,res ) => {
  res.send(`<h2>Let's Code</h2>`);
});

server.use(express.json());
server.use(helmet());
server.use('/api/projects', projectsRouter);

module.exports = server;