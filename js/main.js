document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const rapperName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://names-and-faces-nraivuy3w-rcmtcristian.vercel.app/api/${personName}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = data.profession;
    document.querySelector("div").textContent = data.age;
  } catch (error) {
    console.log(error);
  }
}
