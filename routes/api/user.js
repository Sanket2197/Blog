const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// @route    GET api/user
// @desc     Get All Users
// @access   Public
router.get("/get-users", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// @route    POST api/user
// @desc     Create User
// @access   Public
router.post("/create-user", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({
      name: name,
      email: email,
      password: password
    });

    await user.save();

    res.send("User Created");
  } catch (error) {
    console.log(error);
  }
});

// @route    PUT api/user
// @desc     Updating User
// @access   Public
router.put("/update-user/:id", async (req, res) => {
  const { name } = req.body;

  try {
    const filter = { _id: req.params.id };

    const newData = { name: name };

    const user = await User.findOneAndUpdate(filter, newData, { new: true });

    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// @route    PUT api/user
// @desc     Updating User
// @access   Public
router.delete("/delete-user/:id", async (req, res) => {
  try {
    const filter = { _id: req.params.id };

    const user = await User.findOneAndDelete(filter);

    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
