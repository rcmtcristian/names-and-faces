// const { request } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
let PORT = 8022;

app.use(cors());

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

const characters = {
  bowser: {
    ide: 1,
    voice: "Hikaru Midorikawa",
    voiceId: 1,

    alias: "Bowser",
    description:
      "In many ways, Bowser is the toughest character around. Not only does he have near-impervious hide, but his great mass makes him almost impossible to hurl offscreen. Of course, his weight also makes him rather slow to maneuver, so when facing him in battle, it's best to press your attack and not give him a chance to counter.",
    origin:
      "King Koopa, or Bowser, got his start in Super Mario Bros. for the NES. He was Nintendo's vision of evil. With his dragon-esque appearance and notorious lava-filled castles he was always a force to be reckoned with -- the ultimate last boss. He spent most of his time kidnapping the famous Princess Toadstool (a.k.a Peach) just so he could lure Mario into a set of traps. Of course, they never worked and Peach was just that much more repelled by the beast each time she was unsuccessfully held captive.",
    moves: {
      b: "fire punch",
      "smash b": "Koopa Klaw",
    },
  },
  "captain falcon": {
    ide: 2,
    voice: "Ryō Horikawa",
    voiceId: 2,
    alias: "Captain Falcon",
    description:
      "Falcon's style is a balanced combination of raw power and speed. His attacks are slow, but when combined with Falcon's high mobility, he's a formidable combat force. The Falcon Punch packs the highest degree of destructive power, while the explosive Raptor Boost can be used to smash airborne foes into the depths.",
    origin:
      "Falcon was thrust into the limelight when F-Zero launched on the Super Nintendo Entertainment System (SNES) because he was the star character. The title featured some of the most gorgeous two-dimensional Mode 7 scrolling effects available at the time. On top of that it introduced the idea of blazingly fast, futuristic racing like no other before it. It took Nintendo another eight years before they realized that vision in 3D on the Nintendo 64 with F-Zero X. Outside of the 64DD add-on expansion kit, Captain Falcon hasn't seen a star role since.",
    moves: {
      b: "Flacon Punch",
      "smash b": "Raptor Boost",
    },
  },
  "donkey kong": {
    ide: 3,
    voice: "Takashi Nagasako ",
    voiceId: 3,
    alias: "Donkey Kong",
    description:
      "Donkey Kong is a huge target in a fight, so he hates crowds. When he's in the fray, his Giant Punch deals serious damage to multiple opponents. The big ape's Headbutt hits so hard that it temporarily buries opponent's in the ground. DK is a lot faster than he looks, and he's lethal in the hands of a master.",
    origin:
      "Donkey Kong is an ape-like character from Nintendo that appeared in many video games since 1981. He is also the star of the Donkey Kong series. Donkey Kong was created by Shigeru Miyamoto.The exact origins of the name Donkey Kong are unclear and debated.",
    moves: {
      b: "fire punch",
      "smash b": "Koopa Klaw",
    },
  },
  "dr mario": {
    ide: 4,
    voice: "Charles Martinet",
    voiceId: 4,
    alias: "Dr. Mario",
    description:
      "here's hardly any difference in the abilities of Mario and Dr. Mario, so choosing is largely a matter of taste. Dr. Mario is a tad slower due to his lack of exercise, but his Megavitamins pack a bit more punch than Mario's Fireballs. The capsules travel on a unique trajectory and make a distinct sound on impact.",
    origin:
      "Shhhh... Don't tell anyone -- but Dr. Mario is just Mario in a doctor's robe. ",
    moves: {
      b: "MegaVitamins",
      "smash b": "Super Sheet",
    },
  },
  falco: {
    ide: 5,
    voice: "Hisao Egawa",
    voiceId: 5,
    alias: "Falco Lombardi ",
    description:
      "Where his leader, Fox, has blinding speed, Falco has his own distinct skills and advantages. He has both a higher jump and a longer reach than Fox, and although his Blaster lacks rapid-fire capabilities, it strikes with shocking force. Unlike Fox, Falco can stop enemies in their tracks with his Blaster fire.",
    origin:
      " Like Fox, Falco Lombardi began his career in Star Fox for the Super Nintendo Entertainment system. It was the first game to feature the proverbial FX chip, which enhanced what was graphically possible with the SNES. Interestingly, the game was developed by Argonaut who later began work on Star Fox 2 for the SNES. ",
    moves: {
      b: "Blaster",
      "smash b": "Falco Phantasm",
    },
  },
  fox: {
    ide: 6,
    voice: "Shinobu Satouchi",
    voiceId: 6,
    alias: "Fox McCloud",
    description:
      "Fox is among the quickest and nimblest of the Smash Bros. characters. His speed is offset by low firepower, however, and he's better at one-on-one fights than melees with multiple foes. His Blaster is unique: it does damage but it doesn't make enemies flinch. His Fox illusion is best used as a surprise attack.",
    origin:
      "Fox McCloud began his career in Star Fox for the Super Nintendo Entertainment system. It was the first game to feature the proverbial FX chip, which enhanced what was graphically possible with the SNES. Interestingly, the game was developed by Argonaut who later began work on Star Fox 2 for the SNES.",
    moves: {
      b: "Blaster",
      "smash b": "Fox Illusion",
    },
  },
  ganondorf: {
    ide: 7,
    voice: "Hironori Miyata",
    voiceId: 7,
    alias: "Ganondorf",
    description:
      "Since he's slow and can't jump very high, Ganondorf relies mainly on his immense physical strength to overwhelm his enemies. His great weight also makes him a difficult foe to send offscreen. Ganondorf's Warlock Punch is slow but absurdly powerful, and when he strikes with his Gerudo Dragon, enemies rise skyward enveloped in dark flames.",
    origin:
      "He made his first appearance with one of the most anticipated games of all-time, Legend of Zelda: The Ocarina of Time. Said to be the sole man born to the Gerudo tribe in a hundred years, Ganondorf aspired to conquer the world.",
    moves: {
      b: "Warlord Punch",
      "smash b": "Gerudo Dragon",
    },
  },
  "ice climbers": {
    ide: 8,
    voice: "Sanae Kobayashi",
    voiceId: 8,
    alias: "Ice Climbers",
    description:
      "That's Popo in the blue and Nana in the pink. These two stars of the game Ice Climber have scaled many an ice summit in their mountaineering careers. Back in their glory days, they chased eggplants, cucumbers, and other vegetables that inexplicable fell from frosty summits where a condor reigned supreme. They're rarely seen apart.",
    origin:
      "debuted in the arcades and then the Nintendo Entertainment System (NES) in their own self-titled game, called Ice Climber. The basic concept of Ice Climber was to climb a mountain level-by-level, smashing holes into the forthcoming floors with your hammer, while at the same time defending yourself from bears and other enemies.",
    moves: {
      b: "Ice Shot",
      "smash b": "Squall Hammer",
    },
  },
  jigglypuff: {
    ide: 9,
    voice: "Mika Kanai",
    voiceId: 9,
    alias: "Jigglypuff",
    description:
      "Jigglypuff's normal attacks are weak, and because of its light weight it's easily sent flying. However, with its incredible midair agility, it seems to dance when airborne. Rollout is a powerful speed attack, but be careful not to fly off the edge. Pound does serious damage, and it can also help as a recovery move.",
    origin:
      "Jigglypuff dates back to 1996, when game development studio Game Freak delivered the first-ever Pokemon game for the Japanese Game Boy. All 151 Pokemon were thought up by a small design agency known as Creatures -- and back then, all Pokemon were still treated with equal importance. ",
    moves: {
      b: "Rollout",
      "smash b": "Pound",
    },
  },
  kirby: {
    ide: 10,
    voice: "Makiko Ohmoto",
    voiceId: 10,
    alias: "Kirby",
    description:
      "Kirby's small size lets him dodge many attacks, but his light weight makes him fly far when struck. Using his ability to inflate, he can jump five times. His Swallow attack creates wild combos; not only can he copy foes' moves, but he'll also put on special hats and mimic their voices. His Hammer is unwieldy but powerful.",
    origin:
      "The character was originally created by Masahiro Sakurai -- and the happy little blob was actually just meant as a placeholder for the final character design. But the members of the development team soon grew to like the smiling blob and the first Kirby for Game Boy Color developed from there. Kirby was first called Popopo, but Mr. Sakurai eventually came up with the name Kirby",
    moves: {
      b: "Swallow",
      "smash b": "Hammer",
    },
  },
  link: {
    ide: 11,
    voice: "Nobuyuki Hiyama",
    voiceId: 11,
    alias: "Link",
    description:
      "Burdened with a shield, a heavy sword, and plenty of equipment, Link is not a very mobile character. Nevertheless, he's skilled with the blade, and his varied supply of missile weapons makes him a powerful fighter. To master Link, you must control the pace by balancing your long-range attacks with head-to-head swordplay.",
    origin:
      "Link joined the ranks of other Nintendo super-stars back in 1986, when he starred in his very own game for the Famicom Disk System in Japan. Although the game was called Zelda no Densetsu (The Legend of Zelda), the hero of the game was of course a green-shrouded little guy named Link. Since then, Link has changed his looks with almost every sequel, following his US debut in 1987, even though the manual illustrations remained the same.",
    moves: {
      b: "Bow",
      "smash b": "Boomerang",
    },
  },
  luigi: {
    ide: 12,
    voice: "Charles Martinet",
    voiceId: 12,
    alias: "Luigi",
    description:
      "Luigi has worse traction than his brother, but he's a more powerful jumper. His Fireballs aren't affected by gravity, so they fly straight horizontally. The Green Missile is similar to Pikachu's Skull Bash, but there's a 12.5% chance of a spontaneous misfire. Luigi's taunting pose inflicts minor damage.",
    origin:
      "Luigi dates all the way back to the beginning days of the Mario Brothers. While he didn't appear alongside his brother Mario in Donkey Kong, the moment Mario got his own game Luigi completed the team. Luigi first popped up as Player 2 in the 1983 Mario Bros. arcade game.",
    moves: {
      b: "Fireball",
      "smash b": "Green Missile",
    },
  },
  mario: {
    ide: 13,
    voice: "Charles Martinet i",
    voiceId: 13,
    alias: "Mario",
    description:
      "Mario is a character without any glaring weaknesses and plenty of strong attacks: he's even equipped with a Meteor Smash. He's a straightforward character who'll reflect the actual skills of the player. Mario's Cape will turn other characters in the opposite direction and can also reflect missile weapons.",
    origin:
      " Drawn up by Nintendo star designer Shigeru Miyamoto, Mario first appeared in the arcade hit Donkey Kong as Jumpan before he starred with his brother Luigi in his very first own game: Mario Bros. Since then, Mario has appeared in many Nintendo titles across all platforms, from platformers to racing games. ",
    moves: {
      b: "Fireball",
      "smash b": "Cape",
    },
  },
  marth: {
    ide: 14,
    voice: "Hikaru Midorikawa",
    voiceId: 14,
    alias: "Marth",
    description:
      "Marth is a magnificent swordsman. While his swordplay is faster than that of Link, he lacks power, and his quickness is offset by a marginal endurance. His Shield Breaker gains power the longer it's held. The Dancing Blade combination uses both the Control Stick and the B Button to produce a series of up to four attacks.",
    origin:
      "Marth was officially born on April 20, 1990. the release date of the very first installment in the ongoing Fire Emblem series, developed by Nintendo's very own Intelligent Systems. The story goes that Marth was the betrayed prince of the Kingdom of Altea who was forced into exile when his lands were invaded by the evil kingdom of Dolua. Using his divine sword Falchion, Marth led a revolt against the intruders and became a bonafide hero when he killed the dark dragon Medeus. Although",
    moves: {
      b: "Shield Breaker",
      "smash b": "Dancing Blade",
    },
  },
  mewtwo: {
    ide: 15,
    voice: "Masachika Ichimura",
    voiceId: 15,
    alias: "Mewtwo",
    description:
      "As Mewtwo relies mostly on its powerful brain, there are times when it scarcely uses its arms and legs. Since Mewtwo spends much of its time floating, it flies far when struck. Shadow Ball traces a jagged path once released; the longer Mewtwo holds it, the more powerful it becomes. Mewtwo uses Confusion to spin its foes around.",
    origin:
      "Mewtwo is actually the experiment of years of gene splicing and DNA engineering experiments. Mewtwo's genetic code is obviously based on one of the rarest Pokemon of them all: Mew. Unlike the much smaller and friendlier Mew, you could catch Mewtwo in all three initial Game Boy Pokemon titles.",
    moves: {
      b: "Shadow Ball",
      "smash b": "Confusion",
    },
  },
  "mr game & watch": {
    ide: 16,
    voice: "Isshin Chiba",
    voiceId: 16,
    alias: "Mr Game & Watch",
    description:
      "A resident of a totally flat world, Mr. Game & Watch's frame-by-frame movements is distinctive. His image is known far and wide, and respected by gamers everywhere. In Super Smash Bros. Melee, he hurls sausages with his Chef technique. The random strength of his Judgment is determined by the number displayed; food appears on lucky 7",
    origin:
      "Mr. Game & Watch is the main character of many of Nintendo's classic Game & Watch titles. Developed by Nintendo hardware genius Gunpei Yokoi, the original Game & Watch product combined the functionality of a wristband watch with a miniature videogame. ",
    moves: {
      b: "Chef",
      "smash b": "Judgment",
    },
  },
  ness: {
    ide: 17,
    voice: "Makiko Ohmoto ",
    voiceId: 17,
    alias: "Ness",
    description:
      "The key to mastering Ness is controlling his unique midair jump, which makes up for what he lacks in speed. His PK Flash attack may seem weak at first glance, but it grows more powerful the longer you hold down the B Button. To do a lot of damage with PK Fire, try to burn your opponent as many times as possible.",
    origin:
      "Ness made his debut as the seemingly average kid from Onett, in Nintendo's RPG Earthbound (Mother 2 in Japan). As you soon learn, though, Ness is a boy genious with psychic powers. After a mysterious meteorite landed near his home in Onett, the whiz kid set out on a quest to save the world",
    moves: {
      b: "PK Flash",
      "smash b": "PK Fire",
    },
  },
  peach: {
    ide: 18,
    voice: "Samantha Kelly",
    voiceId: 18,
    alias: "Peach",
    description:
      "Peach's ability to float is invaluable in Super Smash Bros. Melee, as she can return from incredible distances. Balancing this talent, though, is the fact that she's quite light and can be sent flying with a single powerful attack. Her attacks are fairly weak, so you'll have to hang around to win.",
    origin:
      "Peach first appeared as Princess Toadstool in the original Super Mario Bros. on the Nintendo Entertainment System (NES). Early on referred to as Peach in Japan, all we know for sure is that this lady either loves spending quality time locked up in Bowser's castle, or she is the most danger-prone moron the world has ever known.",
    moves: {
      b: "Toad",
      "smash b": "Peach Bomber",
    },
  },
  pichu: {
    ide: 19,
    voice: "Satomi Kōrogi",
    voiceId: 19,
    alias: "Pichu",
    description:
      "Compared with Pikachu, Pichu is a tad more nimble and a little more difficult to hit. Those are the only two advantages, however, and since Pichu damages itself when it uses electrical attacks, it's best suited for handicapped matches. Even though Pichu's tough to catch, it's easy to throw its tiny frame great distances.",
    origin:
      "When the designers at Creatures and Game Freak started work on the sequel to the original Pokemon games for Game Boy, it was the perfect time to take their most popular creation, Pikachu, and give it a makeover. What they came up with was Pichu, the young pre-evolved form of Pikachu, a baby Pikachu.",
    moves: {
      b: "Thunder Jolt",
      "smash b": "Skull Bash",
    },
  },
  pikachu: {
    ide: 20,
    voice: "Ikue Otani",
    voiceId: 20,
    alias: "Pikachu",
    description:
      "While its electrical attacks, such as Thunder and Thunder Jolt, are powerful, Pikachu is at its best speeding around the fray and waiting for its chance to strike. You can control the path of Pikachu's two-directional Quick Attack, allowing you to jump twice. Hold down the B Button to charge up Skull Bash.",
    origin:
      " Like all the other Pokemon, Pikachu dates back to 1996, when game development studio Game Freak delivered the first-ever Pokemon game for the Japanese Game Boy. ",
    moves: {
      b: "Thunder Jolt",
      "smash b": "Skull Bash",
    },
  },
  roy: {
    ide: 21,
    voice: "Jun Fukuyama",
    voiceId: 21,
    alias: "Roy",
    description:
      "While Roy's moves are well balanced, he's a little on the slow side, and doesn't excel at midair combat. His blade, the Sword of Seals, gives him excellent reach, and makes his Double-Edge Dance slightly different than Marth's Dancing Blade. When it's fully charged, Roy's destructive Flare Blade delivers an instant KO.",
    origin:
      "Roy will make his first videogame appearance in the forthcoming Fire Emblem: Maiden of the Dark for Game Boy Advance. While there aren't all that many details about the character, we know that he hails from the continent of Erezo, which is being attacked by the neighbors of Belun for mysterious reasons. For centuries, the two lands were neighbors and compatriots; Suddenly, they are bitter enemies, and nobody in your homeland knows the reason for the outburst of violence.",
    moves: {
      b: "Flare blade",
      "smash b": "Double-Edge Dance",
    },
  },
  samus: {
    ide: 22,
    voice: "Alésia Toyoko Glidewell",
    voiceId: 22,
    alias: "Samus",
    description:
      "Samus has an abundance of projectile weapons, making her a long-distance attack specialist. The most powerful weapon in her arsenal is her Charge Shot, but be warned: it can be reflected. Her missiles have homing capabilities, but when fired as Smash Attacks, they fly on a straight trajectory and have boosted power.",
    origin:
      " Samus began her career in the 1986 release of Metroid on the Nintendo Entertainment System. At the time of its release, however, kids around the world presumed the hi-tech space suit housed a male action star. Little did fans know that she was in fact a female. It wasn't until the players beat the game that they saw Samus remove the helmet on the suit and reveal long, flowing hair",
    moves: {
      b: "Charge Shot",
      "smash b": "Missile",
    },
  },
  "young link": {
    ide: 23,
    voice: "Fujiko Takimoto",
    voiceId: 23,
    alias: "Young Link",
    description:
      "Young Link is lighter and faster than his older self, and his Kokiri sword packs less punch. Even though his Boomerang has a shorter range, he has greater control over it. He's a smaller target, and while his Hookshot has less reach than older Link's, you can still use it in midair as a last ditch attempt to grab a ledge.",
    origin:
      "Young Link's game history depends on how you define the Young Link character. If we're strictly talking about the Young Link model introduced in Ocarina of Time, he's only appeared in three games. Originally, Link joined the ranks of other Nintendo super-stars back in 1986, when he starred in his very own game for the Famicom Disk System in Japan.",
    moves: {
      b: "FIre Bow",
      "smash b": "Boomerang",
    },
  },
  yoshi: {
    ide: 24,
    voice: "Kazumi Totaka",
    voiceId: 24,
    alias: "Yoshi",
    description:
      "To make up for his lack of powerful airborne attacks, Yoshi has a miraculous jumping ability and is resistant to damage while in the air. Yoshi can also swallow a foe and transform him or her into an egg: try doing this close to an edge! The speed and power of the Egg Roll increases if you hold down the B Button, but it'll be tougher to control.",
    origin:
      "Yoshi first appeared as Mario's sidekick -- or horse, if you will -- in the Super NES blockbuster Super Mario World. He quickly became a fan favorite, which led to the creation of spin-off titles like Yoshi's Egg (a puzzle game released in the US as Yoshi's Cookie). ",
    moves: {
      b: "Egg Lay",
      "smash b": "Egg Lay",
    },
  },
  zelda: {
    ide: 25,
    voice: "Jun Mizusawa",
    voiceId: 25,
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
    ide: 26,
    voice: "Unknow",
    alias: "Unknown",
    description: "It seems the character you're looking for is somewhere else",
    origin: "You most likely typed the name wrong, check and try again",
    moves: {
      b: "Unknown",
      "smash b": "Unknown",
    },
  },
};

app.get("/api/:characterName", (request, response) => {
  const characterName = request.params.characterName.toLowerCase();
  if (characters[characterName]) {
    response.json(characters[characterName]);
  } else {
    response.json(characters["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server starting on  port ${PORT} minus 10 seconds`);
});

module.exports = app;
