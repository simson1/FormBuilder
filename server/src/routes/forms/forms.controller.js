const {
  getForm,
  addNewForm,
  getAllForms,
} = require("../../models/forms/forms.model");
const mongoose = require("mongoose");

async function httpGetAllForms(req, res) {
  const forms = await getAllForms();
  return res.status(200).json(forms);
}

async function httpAddNewForm(req, res) {
  const form = req.body;
  if (!form.formName || !form.questions || !form.time) {
    return res.status(400).json({
      error: "Missing required form properties",
    });
  }

  await addNewForm(form);
  return res.status(201).json(form);
}

async function httpGetForm(req, res) {
  let form;
  if (mongoose.isValidObjectId(req.params.formId)) {
    form = await getForm(req.params.formId);
  }
  if (!form) {
    return res.status(404).json({
      error: "Form doesn't exist",
    });
  }
  return res.status(200).json(form);
}

module.exports = {
  httpGetAllForms,
  httpAddNewForm,
  httpGetForm,
};
