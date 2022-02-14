const { addNewSurvey } = require("../../models/surveys/surveys.model");

async function httpAddNewSurvey(req, res) {
  const survey = req.body;
  if (!survey.formID || !survey.answers) {
    return res.status(400).json({
      error: "Missing required survey properties",
    });
  }

  await addNewSurvey(survey);
  return res.status(201).json(survey);
}

module.exports = {
  httpAddNewSurvey,
};
