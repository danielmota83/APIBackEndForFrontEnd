require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./database/database");
const characterRoute = require('./characters/characters.route');
const userRoute = require("./users/users.route");
const swaggerRoute = require("./swagger/swagger.route");
const authRoute = require("./auth/auth.route");

const port = process.env.PORT || 3000;

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/characters', characterRoute);
app.use("/api-docs", swaggerRoute);

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});