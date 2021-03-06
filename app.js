const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const todoRouter = require('./routes/todoRoutes');
const projectRouter = require('./routes/projectRoutes');
const errorHandler = require('./middleware/errorHandler');
const DB = require('./utils/mongodb');

dotenv.config({ path: './config/config.env' });
const app = express();
app.use(express.json());

DB();

const port = process.env.PORT;

app.use('/todo', todoRouter);
app.use('/project', projectRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server up and running at  ${port}`.yellow.underline);
});
