const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// let uri = "mongodb+srv://thelbaum:SftzowOLfTgQrBgF@cluster0.opurh.mongodb.net/budget?retryWrites=true&w=majority";

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/budget',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }).then(() => console.log( 'Database Connected' ))
//   .catch(err => console.log( err ));

  mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }).then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});