const express = require("express");
const biodataRouter = express.Router();

biodataRouter.use(
  (timeLog = (req, res, next) => {
    console.log("Requested URI Path: ", req.url);
    next();
  })
);

biodataRouter.get("/", (req, res) => {
  res.send("Biodata Home Page");
});

module.exports = biodataRouter;
