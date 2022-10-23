document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const userName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://names-and-faces-api.vercel.app/api/${userName}`
    );

    const data = await response.json();

    document.getElementById("personName").innerText = data.alias;
    document.getElementById("personOrigin").innerText = data.origin;
    document.getElementById("personDescription").innerText = data.description;
    document.getElementById("personVoice").textContent = data.voice;
    document.getElementById("moves").textContent = data.moves[0];
  } catch (error) {
    console.log(error);
  }
}
