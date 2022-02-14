const axios = require("axios");

const Form = require("./forms.mongo");

async function addNewForm(form) {
  var form = new Form(form);
  await form.save();
}

async function getAllForms() {
  return await Form.find({}, { __v: 0 });
}

async function getForm(formId) {
  return await Form.findOne({ _id: formId }, { __v: 0 });
}

module.exports = {
  addNewForm,
  getAllForms,
  getForm,
};
