const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/users");
const _ = require("lodash");
const { check, validationResult } = require("express-validator/check");
var cloudinary = require("cloudinary");
let multer = require("multer");
let upload = multer();
//==========================
//======== /api/user/....
//==========================

let loginValidations = [
  check("email").isEmail(),
  check("password").isLength({ min: 5 })
];

let signUpValidation = [
  check("email").isEmail(),
  check("password").isLength({ min: 5 }),
  check("name").isLength({ min: 5, max: 15 })
];

let changePasswordValidation = [
  check("password").isLength({ min: 5 }),
  check("oldPassword").isLength({ min: 5 })
];

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
router.get("/", async function(req, res, next) {
  const result = await User.find({})
    .populate("liked")
    .populate("disliked");
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    status: "You are in / page!",
    result: result
  });
});

//Sends the info of currently logged in user
router.get("/get-user", isLoggedIn, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).send({ message: "The user does not exist" });
    }
  } catch (error) {
    res.status(400).send({ message: "Some error occured" });
  }
});
//Route for login:- uses passport local login strategy
router.post("/login", loginValidations, async (req, res, next) => {
  //   const { errors, isValid } = validateLoginInput(req.body);

  //   //Form related error
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
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
router.post("/signup", signUpValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  console.log("Here");

  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ "local.email": email });
    let errors = {};
    if (user) {
      errors = [{ param: "email", msg: "Email already exist" }];
      return res.status(400).json({ errors: errors });
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
      return res.status(200).send(newUser);
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

router.post("/change_password", isLoggedIn, changePasswordValidation, function(
  req,
  res,
  next
) {
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

router.get(
  "/auth/google",
  passport.authenticate("google", {
    prompt: "select_account",
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      "https://www.googleapis.com/auth/plus.profile.emails.read"
    ]
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    console.log("Google callback route is called");
    res.redirect("/dashboard");
  }
);

router.put("/", isLoggedIn, async (req, res) => {
  const userId = req.user._id;
  const data = req.body;
  try {
    const updateResponse = await User.findByIdAndUpdate({ _id: userId }, data, {
      upsert: true
    });
    console.log(updateResponse);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: true,
      status: "Put successfully created"
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/solved-question", async (req, res) => {
  try {
    const question = req.body.question;
    console.log("Solve question is called", question, req.user._id);
    const newUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          solvedQuestions: question
        }
      },
      { new: true }
    );
    res.status(200).send(newUser);
  } catch (error) {
    console.log(error);
  }
});

router.post("/unsolve-question", async (req, res) => {
  try {
    const question = req.body.question;
    console.log("Solve question is called", question, req.user._id);
    const newUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $pull: {
          solvedQuestions: question
        }
      },
      { new: true }
    );
    res.status(200).send(newUser);
  } catch (error) {
    console.log(error);
  }
});
router.post("/image/", upload.single("userImage"), async (req, res) => {
  try {
    console.log("posting");
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });
    console.log("Posting body");
    console.log(req.body);
    console.log("done posting");
    // let base64File=await getBase64(req.body.userImage);
    // console.log(base64File);
    const result = await cloudinary.uploader.upload(req.body.userImage, {
      crop: "limit",
      tags: "samples",
      width: 3000,
      height: 2000
    });
    console.log(result);
    const info = await User.updateOne({
      _id: req.user._id
    }).set({ imageUrl: req.body.userImage });
    console.log("Done with all");
    res.status(200).send(info);
  } catch (err) {
    console.log("error");
    console.log(err);
  }
});

module.exports = router;
