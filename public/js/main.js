//need main.js file as this is client side code for event listener for the button
//client side code so API talks to the front end

document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const rapperName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://rap-names-api-testtt.herokuapp.com/api/${rapperName}`
    );
    const data = await response.json();

    console.log(data);
    document.querySelector("h2").innerText = data;
  } catch (error) {
    console.log(error);
  }
}
