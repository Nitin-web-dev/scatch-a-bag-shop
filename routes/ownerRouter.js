const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owner = await ownerModel.find();
    if (owner.length > 0) {
      return res
        .status(500)
        .send("you don't have the permission to create a new owner");
    } else {
        let {fullname, email, Password} = req.body;
      const createdOwner  =  await ownerModel.create({
        fullname,
        email,
        Password,
      });

      res.status(201).send(createdOwner);
    }
  });
}

router.get("/", function (req, res) {
  res.send("router api");
});

module.exports = router;
