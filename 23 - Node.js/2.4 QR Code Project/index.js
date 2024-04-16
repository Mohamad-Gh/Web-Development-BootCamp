/* 
1. Use the inquirer npm package to get user input.

2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

console.log("wellcome");
var question = [
  {
    type: "input",
    message: "input your Link",
    name: "url",
  },
];

inquirer.prompt(question).then((answer) => {
  const url = answer.url;
  const qr_png = qr.image(url);
  qr_png.pipe(fs.createWriteStream("qr_img.png"));
  fs.writeFile("mamad.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
