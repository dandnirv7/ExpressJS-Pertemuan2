require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 3000;
const biodataRouter = require("./biodataRoutes");

app.use("/", biodataRouter);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
