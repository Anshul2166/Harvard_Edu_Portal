const express = require("express");
const router = express.Router();

const passport = require("passport");
const User = require("../models/users");
const bcrypt = require("bcrypt-nodejs");
const _ = require("lodash");
//==========================
//======== /api/user/....
//==========================

//function to check if the user is already logged in or not
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    console.log("You are not logged in!");
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: "You are not logged in!" });
  }
}

//Default get page:- Only for demo purpose
router.get("/", function(req, res, next) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    status: "You are in / page!"
  });
});

//Route for login:- uses passport local login strategy
router.post("/login", async (req, res, next) => {
  //   const { errors, isValid } = validateLoginInput(req.body);

  //   //Form related error
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
  const { email, password } = req.body;

  //User with provided email check
  try {
    const user = await User.findOne({ "local.email": email });
    const errors = {};
    console.log(user);
    if (!user) {
      errors.email = "User with provided email does not exist";
      return res.status(404).json(errors);
    }

    if (user.validPassword(password)) {
      //Everything goes right

      //Manually serializing user  in passport session
      req.login(user, err => {
        if (err) {
          return res.status(400).send("Oops some error occured");
        }
        return res
          .status(200)
          .send({ message: "The user is successfully logged in " });
      });
    } else {
      errors.password = "Password incorrect";
      return res.status(400).json(errors);
    }
  } catch (err) {
    console.log(err);
  }
});

//Route for signup:- uses passport local-signup strategy
router.post("/signup", async (req, res) => {
  //   const { errors, isValid } = validateRegisterInput(req.body);

  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
  console.log("Here");

  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ "local.email": email });
    const errors = {};
    if (user) {
      errors.email = "Email already exist";
      return res.status(400).json(errors);
    }

    const newUser = await new User({
      local: {
        username: name,
        email,
        password
      }
    });

    newUser.local.password = newUser.generateHash(password);
    //saving the user
    await newUser.save();
    //Manually serializing user  in passport session
    req.login(newUser, err => {
      if (err) {
        return res.status(400).send("Oops some error occured");
      }
      return res
        .status(200)
        .send({ message: "The user has successfully signed up" });
    });
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
});

//Route for user logout
router.get("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    req.session.destroy();
    res.clearCookie("connect.sid"); // clean up session info from client-side
    return res.json({ msg: "logging you out" });
  } else {
    return res.json({ msg: "no user to log out!" });
  }
});

router.post("/change_password", isLoggedIn, function(req, res, next) {
  var user = req.user;
  console.log(user);
  // checking if don't have current local password or provided password is valid
  if (!user.local.password || user.validPassword(req.body.oldPassword)) {
    // if true - assign new password
    user.local.password = user.generateHash(req.body.password);
    user.save().then(
      user => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: true,
          status: "Password successfully changed"
        });
        return;
      },
      err => {
        console.log(err);
        return next(err);
      }
    );
    // if not valid - send error message
  } else {
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    return res.json({ success: false, status: "Wrong password" });
  }
});

router.get("/logout", async (req, res) => {
  try {
    await req.logout();
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

module.exports = router;
