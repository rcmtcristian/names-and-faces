// document.querySelector("button").addEventListener("click", apiRequest);

let button = document.getElementById("button");
document.querySelector("button").addEventListener("click", apiRequest);
// ability to submit with enter for preference/ web accessability
let input = document.getElementById("input");
input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    document.getElementById("button").click();
  }
});

async function apiRequest() {
  const userName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://names-and-faces-api.vercel.app/api/${userName}`
    );

    const data = await response.json();

    const specificMoves = () => {
      Object.entries(data.moves).forEach(([key, value]) => {
        return value;
      });
    };

    document.getElementById("personName").innerText = data.alias;
    document.getElementById("personOrigin").innerText = data.origin;
    document.getElementById("personDescription").innerText = data.description;
    document.getElementById("personVoice").textContent = data.voice;
    document.getElementById("moves").textContent = specificMoves();
    document.getElementById("test").innerHTML = data.ide;
    document.getElementById("image").src = `/images/1.jpg`;
    console.log(data.ide);
  } catch (error) {
    console.log(error);
  }
}
