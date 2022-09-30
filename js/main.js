const btn = document.querySelector(".btn");

btn.addEventListener("click", apiRequest());

async function apiRequest() {
  const rapperName = document.querySelector("input").value;
  try {
    const response = await fetch(`url/${rapperName}`);
    const data = await response.json();
  } catch (err) {
    console.log(`We found the error ${err}`);
  }
}
