// const { response } = require("express");
//this makes sure the server has acces to express
const express = require("express");
//create a variable to hold expresss, and let us use all of express methods
const app = express();
//cors is a npm package (module) which enables controlled access to resources located outside of a given domain, like local file requests... we need to install cors => npm install cors --save
//cors let hosted servers have access to local files (main.js)
const cors = require("cors");
//create a PORT varible to save a number so we can listen
const PORT = 8000;

app.use(cors());

const rappers = {
  "21 savage": {
    age: 29,
    birthday: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the Rapper": {
    age: 29,
    birthday: "Chancelor Johnathan Bennett",
    birthLocation: "Chicago, Illinois",
  },
  dylan: {
    age: 29,
    birthday: "Dylan",
    birthLocation: "Dylan",
  },
};

//gets requests let us hear a request and respond with dara (html files, objects aka json, etc)
app.get("/", (request, response) => {
  //.sendFile lets us send a file as a response
  //__dirname lets us find a file from whatever our server.js file is located as a current directory
  response.sendFile(__dirname + "/index.html");
});

//using : we can add query parameters to serch in our url
app.get("/api/:rapperName", (request, response) => {
  //we can request a query parameter and which parameter we want(comming form the url) and store it to a varaible
  const rappersName = request.params.rapperName.toLowerCase();
  if (rappers[rappersName]) {
    //.json lets us send a an object as a response in this case the rappers object
    response.json(rappers[rappersName]);
  } else {
    response.json(rappers["dylan"]);
  }
  //response.json(rappers)
});

//this let us use the port the hosting is making us use and if its not available use our PORT
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on PORT ${PORT}! YOU BETTER GO CATCH IT!`);
});
