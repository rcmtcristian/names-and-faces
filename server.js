// const { request } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
let PORT = 8022;

app.use(cors());

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

const names = {
  bowser: {
    voice: 23,
    alias: "Bowser",
    description: "Fullstack Software Engineer",
    origin: "",
    moves: {
      b: "fire punch",
      "smash b": "Koopa Klaw",
    },
  },
  "captain falcon": {
    voice: 22,
    alias: "Captain Falcon",
    description: "Backend Software Engineer",
    origin: "",
    moves: {
      b: "Flacon Punch",
      "smash b": "Raptor Boost",
    },
  },
  "donkey kong": {
    voice: 22,
    alias: "Donkey Kong",
    description: "Frontend Software Engineer",
    origin: "",
    moves: {
      b: "fire punch",
      "smash b": "Koopa Klaw",
    },
  },
  "dr mario": {
    voice: 26,
    alias: "Dr. Mario",
    description: "Dylan",
    origin: "",
    moves: {
      b: "MegaVitamins",
      "smash b": "Super Sheet",
    },
  },
  falco: {
    voice: 26,
    alias: "Falco",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Blaster",
      "smash b": "Falco Phantasm",
    },
  },
  fox: {
    voice: 26,
    alias: "Fox McCloud",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Blaster",
      "smash b": "Fox Illusion",
    },
  },
  ganondorf: {
    voice: 26,
    alias: "Ganondorf",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Warlord Punch",
      "smash b": "Gerudo Dragon",
    },
  },
  "ice climbers": {
    voice: 26,
    alias: "Ice Climbers",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Ice Shot",
      "smash b": "Squall Hammer",
    },
  },
  jigglypuff: {
    voice: 26,
    alias: "Jigglypuff",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Rollout",
      "smash b": "Pound",
    },
  },
  kirby: {
    voice: 26,
    alias: "Kirby",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Swallow",
      "smash b": "Hammer",
    },
  },
  link: {
    voice: 26,
    alias: "Link",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Bow",
      "smash b": "Boomerang",
    },
  },
  luigi: {
    voice: 26,
    alias: "Luigi",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Fireball",
      "smash b": "Green Missile",
    },
  },
  mario: {
    voice: 26,
    alias: "Mario",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Fireball",
      "smash b": "Cape",
    },
  },
  marth: {
    voice: 26,
    alias: "Marth",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Shield Breaker",
      "smash b": "Dancing Blade",
    },
  },
  mewtwo: {
    voice: 26,
    alias: "Mewtwo",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Shadow Ball",
      "smash b": "Confusion",
    },
  },
  "mr game & watch": {
    voice: 26,
    alias: "Mr Game & Watch",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Chef",
      "smash b": "Judgment",
    },
  },
  ness: {
    voice: 26,
    alias: "Ness",
    description: "Dylan",
    origin: "",
    moves: {
      b: "PK Flash",
      "smash b": "PK Fire",
    },
  },
  peach: {
    voice: 26,
    alias: "Peach",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Toad",
      "smash b": "Peach Bomber",
    },
  },
  pichu: {
    voice: 26,
    alias: "Pichu",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Thunder Jolt",
      "smash b": "Skull Bash",
    },
  },
  pikachu: {
    voice: 26,
    alias: "Pikachu",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Thunder Jolt",
      "smash b": "Skull Bash",
    },
  },
  roy: {
    voice: 26,
    alias: "Roy",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Flare blade",
      "smash b": "Double-Edge Dance",
    },
  },
  samus: {
    voice: 26,
    alias: "Samus",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Charge Shot",
      "smash b": "Missile",
    },
  },
  "young link": {
    voice: 26,
    alias: "Young Link",
    description: "Dylan",
    origin: "",
    moves: {
      b: "FIre Bow",
      "smash b": "Boomerang",
    },
  },
  yoshi: {
    voice: 26,
    alias: "Yoshi",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Egg Lay",
      "smash b": "Egg Lay",
    },
  },
  zelda: {
    voice: "Jun Mizusawa",
    alias: "Zelda",
    description:
      "Zelda is a bit slow and, because of her light frame, easy to send flying. On the other hand, her magical skills lend her reliable and explosive attack power. Zelda's easier to use if you focus on waiting and countering rather than pressing attacks. She can use Nayru's Love to reflect projectile attacks or as an offensive weapon.",
    origin:
      "Although she is an NPC in most of the games she appeared in, Princess Zelda is actually more famous than the protagonist of the Zelda games. Sure, one reason is that the games are called Legend of Zelda (and not Legend of Link), but more importantly, it's that most Zelda games allowed you to customize the main character's name. ",
    moves: {
      b: "Nayru's Love",
      "smash b": "Din's Fire",
    },
  },
  unknown: {
    voice: 26,
    alias: "Unknown",
    description: "Dylan",
    origin: "",
    moves: {
      b: "Unknown",
      "smash b": "Unknown",
    },
  },
};

app.get("/api/:userName", (request, response) => {
  const userName = request.params.userName.toLowerCase();
  if (names[userName]) {
    response.json(names[userName]);
  } else {
    response.json(names["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server starting on  port ${PORT} minus 10 seconds`);
});

module.exports = app;
