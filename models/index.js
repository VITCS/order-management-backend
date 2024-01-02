const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:admin@cluster9.ncym7tg.mongodb.net/";

function main() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Succesfull");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

module.exports = { main };
