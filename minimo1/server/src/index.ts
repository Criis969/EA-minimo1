import express from 'express';
import path from 'path';
import cors from 'cors';

//Importing routes
import IndexRoutes from './routes';

// Initializations
const app = express();
import connect from "./database";

// Settings
app.set('port', process.env.PORT || 8080);

// Middlewares
app.use(cors());
app.use(express.json()); // Para poder entender los JSON
app.use(express.urlencoded({extended:false})); // Para cuando una URL envie un dato, poder entenderlo

// Routes
app.use('/', IndexRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    connect();
});