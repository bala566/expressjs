const express = require("express");
let app = express();
app.get("/", (request, response) => {
  response.send("Hello world");
  console.log(request);
});
app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Todays Date is ${date}`);
});
app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});
app.listen(3000);
