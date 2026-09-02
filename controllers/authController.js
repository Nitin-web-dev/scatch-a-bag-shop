const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");

const generateToken = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    let { fullname, email, Password } = req.body;

    let user = await  userModel.findOne({email: email});
    if(user) return res.status(401).send("you already have an account")
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(Password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        else {
          let userCreated = await userModel.create({
            fullname,
            email,
            Password: hash,
          });

          let token = generateToken(userCreated);

          res.cookie("token", token);
          res
            .status(201)
            .send({
              message: "user created successfully",
              token: token,
              userCreated,
            });
        }
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};


module.exports.loginUser = async function(req,res){
  try {
    let {  email, Password } = req.body;
  } catch (error) {
    console.error(error.message);
  }
}