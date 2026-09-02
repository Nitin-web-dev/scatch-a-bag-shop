const express = require("express"); 
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/authController');

router.get("/", async function (req, res) {
  try {
    let users = await userModel.find();
    res.status(200).send(users);
  } catch (error) {
        console.log(error.message);
  }
});

router.post("/register",  registerUser);
router.post("/login",  loginUser);

module.exports = router;
