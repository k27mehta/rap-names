const express = require("express");
const app = express();
const cors == require('cors')
const PORT = 8000;

//created an obeject
const rappers = {
  "21 savage": {
    age: 29,
    birthDate: "April 21",
    birthName: "Seyaa Bin",
    birthLocation: "London, England",
  },

  "Chance the rapper": {
    age: 34,
    birthDate: "April 21",
    birthName: "caaaca Bin",
    birthLocation: "London, England",
  },

  "Chance the fob": {
    age: 34,
    birthDate: "April 21",
    birthName: "aaaaSeyaa Bin",
    birthLocation: "London, England",
  },

  "other rap city the rapper": {
    age: 34,
    birthDate: "April 21",
    birthName: "Saaaaaeyaa Bin",
    birthLocation: "London, England",
  },
};
//inside express server do a get request

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//listen to a diff path
// have a callback with request and response parameter
//send JSON as response
app.get("/api/:rapperName", (request, response) => {
  // grab query parament from request
  const rapperName = request.params.rapperName.toLowerCase();

  if (rappers[rapperName]) {
    response.json(rappers[rapperName.birthName]);
  } else {
    //send other if rapper doesn't exist
    response.json(rappers["other rap city the rapper"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on ${PORT}! You better go!`);
});
