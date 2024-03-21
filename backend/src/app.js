const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 5000;
const app = express();

// Import ROUTES
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is Running").status(200);
});

app.listen(PORT, () => {
  console.log("Server is running");
});
