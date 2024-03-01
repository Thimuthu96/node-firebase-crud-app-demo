const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/api/v1/student", studentRoutes);

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
