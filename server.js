// Declare dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

//Establish port and express 
const PORT = process.env.PORT || 3001
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));