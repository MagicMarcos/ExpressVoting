const express = require('express');
const session = require('express-session');
const { auth, requiresAuth } = require('express-openid-connect');
const authConfig = require('./config/auth0');

const { httpServer, app } = require('./middleware/socket-io');

const methodOverride = require('method-override');

const connectDB = require('./config/database');
connectDB();

const mainRoutes = require('./routes/main');
const voteRoutes = require('./routes/vote');

require('dotenv').config({ path: './config/.env' });

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(auth(authConfig));

app.use(methodOverride('_method'));

app.use(
  session({
    secret: 'XANFDJFBIBaskdjfbfkSdaksdhj68462516Xjfnxcasd',
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/', mainRoutes);
app.use('/vote', requiresAuth(), voteRoutes);

httpServer.listen(process.env.PORT);
