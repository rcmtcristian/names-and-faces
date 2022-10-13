const { request } = require("express");
const express = require("express");
const app = express();
const PORT = 8022;

const names = {
  cristian: {
    age: 23,
    alias: "cris",
    nationality: "Dominican",
  },
  greg: {
    age: 22,
    alias: "jidmer",
    nationality: "mexican",
  },
  yader: {
    age: 22,
    alias: "yaderade",
    nationality: "puerto rican",
  },
  dylon: {
    age: 26,
    alias: "dylan",
    nationality: "Dylandia",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:personName", (request, response) => {
  const personName = request.params.personName.toLowerCase();
  // response.json(names);

  if (names[personName]) {
    response.json(names[personName]);
  } else {
    response.json(names["dylon"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server starting on  port ${PORT} minus 10 seconds`);
});
