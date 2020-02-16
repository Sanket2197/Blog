const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const filter = { email: email };

    const user = await User.findOne(filter);

    if (!user) {
      return res.send("Invalid Credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.send("Invalid Credentials");
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    const SECRET = "NehaSecret";

    const expiresIn = { expiresIn: 360000 };

    jwt.sign(payload, SECRET, expiresIn, (err, token) => {
      if (err) {
        throw err;
      }

      res.json({ token });
    });
  } catch (error) {
    Console.log(error);
  }
});

module.exports = router;
