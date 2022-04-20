const express = require('express');
const app = express();

const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer(app);

const io = new Server(httpServer, {});

module.exports = {
  httpServer: httpServer,
  app: app,
  useSocket: (req, res, next) => {
    if (req) {
      req.socketIO = io;
      next();
    } else {
      res.redirect('/');
    }
  },
};
