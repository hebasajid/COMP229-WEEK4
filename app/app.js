// Third-Party Modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//autho step 1 : import modules

import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

//step 2: define our authentication stragety
let localStrategy = passportLocal.Strategy;

//step 3 - import user model
import User from './models/user.js';

//step 4 - 



// Import Mongoose Module
import mongoose from 'mongoose';

// Configuration Module
import { MongoURI, Secret } from '../config/config.js';

// Import Routes
import indexRouter from './routes/index.route.server.js'
import movieRouter from './routes/movies.route.server.js';
import authRouter from './routes/auth.route.server.js';

// Instantiate Express Application
const app = express();

// Complete the DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//Listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

// Set Up Middlewares

// Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'../public')));

//AUTH step 4 - setup express session
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

//auth step 5: setup flash:
app.use(flash());

//AUTH step 6: initalize pasport and session'
app.use(passport.initialize());
app.use(passport.session());

//auth step 7: implementing the auth strategy:
passport.use(User.createStrategy());

//auth step 8 - setup serializtion and deserialization:
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Use Routes
app.use('/', indexRouter);
app.use('/', movieRouter);
app.use('/', authRouter);


export default app;