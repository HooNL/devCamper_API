const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path: './config/.env'})
const port = process.env.PORT || 5000;

app.listen(
	port,
	console.log(`App running in ${process.env.NODE_ENV} mode on port ${port}`)
);
