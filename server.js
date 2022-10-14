const express = require("express");
const app = express();
const cors = require("cors");
let PORT = 8022;

app.use(cors());
const names = {
  cristian: {
    age: 23,
    alias: "Cris",
    profession: "Fullstack Software Engineer",
  },
  gregory: {
    age: 22,
    alias: "greg",
    profession: "Backend Software Engineer",
  },
  melodias: {
    age: 22,
    alias: "Dias",
    profession: "Frontend Software Engineer",
  },
  dylan: {
    age: 26,
    alias: "dylan",
    profession: "Dylan",
  },
};

app.get("/", (request, response) => {
  console.log(response.sendFile(__dirname + "/index.html"));
});

app.get("/api/:personName", (request, response) => {
  const personName = request.params.personName.toLowerCase();
  if (names[personName]) {
    response.json(names[personName]);
  } else {
    response.json(names["dylan"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server starting on  port ${PORT} minus 10 seconds`);
});
