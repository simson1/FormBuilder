const express = require("express");
const { httpAddNewSurvey } = require("./surveys.controller");
const surveysRouter = express.Router();

surveysRouter.post("/", httpAddNewSurvey);

module.exports = surveysRouter;
