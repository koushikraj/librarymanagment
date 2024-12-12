const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);

const URL = process.env.DB_URL;

if (!URL) {
  console.error("DB_URL is not defined in environment variables.");
  process.exit(1);
}

console.log("Connecting to:", URL);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  });
// const mongoose = require("mongoose")

// require("dotenv").config();

// mongoose.set("strictQuery", false);
// const URL = process.env.DB_URL
// try {

//     mongoose.connect(URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });

//     console.log("Connected To Database");

// } catch (error) {

//     console.log("error while loadind the data base", error);

// }