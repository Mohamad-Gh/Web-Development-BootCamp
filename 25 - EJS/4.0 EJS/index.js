import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const d = new Date();
let dayOfWeek = d.getDay();

app.listen(port, (req, res) => {
  console.log(`port: ${port} is ready to use`);
  console.log(dayOfWeek);
});

app.get("/", (req, res) => {
  if (dayOfWeek == 6 || dayOfWeek == 0) {
    res.render(__dirname + "/views/index.ejs", {
      day: "weekend",
      something: "Have Fun!",
    });
  } else {
    res.render(__dirname + "/views/index.ejs", {
      day: "weekday",
      something: "Work Hard!",
    });
  }
});
