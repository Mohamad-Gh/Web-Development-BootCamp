import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("the 3000 is your port");
});
app.get("/", (req, res) => {
  res.send("Hello! World");
});
