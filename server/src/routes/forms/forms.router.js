const express = require("express");
const {
  httpGetAllForms,
  httpAddNewForm,
  httpGetForm,
} = require("./forms.controller");
const formsRouter = express.Router();

formsRouter.get("/", httpGetAllForms);
formsRouter.post("/", httpAddNewForm);
formsRouter.get("/:formId", httpGetForm);

module.exports = formsRouter;
