const path = require("path");
const express = require("express");

const app = express();

const port=process.env.PORT || 3000;

const publicDirectoryPath=path.join(__dirname,"../public")