const express = require("express");
const { mongoConnect } = require("./services/mongo");
const formsRouter = require("./routes/forms/forms.router");
const surveysRouter = require("./routes/surveys/surveys.router");
const path = require("path");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/forms", formsRouter);
app.use("/surveys", surveysRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

async function startServer() {
  await mongoConnect();

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
  });
}

startServer();
