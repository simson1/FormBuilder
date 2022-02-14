const Survey = require("./surveys.mongo");

async function addNewSurvey(survey) {
  var survey = new Survey(survey);
  await survey.save();
}

module.exports = {
  addNewSurvey,
};
