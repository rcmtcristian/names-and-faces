document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const userName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://names-and-faces-api.vercel.app/api/${userName}`
    );

    const data = await response.json();

    document.getElementById("personName").innerText = data.alias;
    document.getElementById("personTitle").innerText = data.profession;
    document.getElementById("personAge").textContent = data.age;
  } catch (error) {
    console.log(error);
  }
}
