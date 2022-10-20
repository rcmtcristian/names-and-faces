// const { request } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
let PORT = 8022;

app.use(cors());

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
  console.log("Here");
  console.log(names);
});

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

app.get("/api/:userName", (request, response) => {
  const userName = request.params.userName.toLowerCase();
  if (names[userName]) {
    response.json(names[userName]);
  } else {
    response.json(names["dylan"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server starting on  port ${PORT} minus 10 seconds`);
});

module.exports = app;
