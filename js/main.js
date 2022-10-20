document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const userName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://names-and-faces-api.vercel.app/api/${userName}`
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    document.getElementById("personName").innerText = data.profession;
    document.getElementById("personAge").textContent = data.age;
  } catch (error) {
    console.log(error);
  }
}
