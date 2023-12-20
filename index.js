const express = require("express");
const app = express();
// require('dotenv').config()

const PORT = 4000 // process.env.PORT;


const cors = require("cors");

app.use(express.json());
app.use(cors());

// routes
const googleSheetRouter = require("./routes/googleSheet");

app.use("/googleSheet", googleSheetRouter);

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
