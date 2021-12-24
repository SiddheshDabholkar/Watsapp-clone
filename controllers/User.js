const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.login = (req, res) => {
  const { name, phone, profilePic, about } = req.body;
  try {
    !name && res.json({ error: "Username cannot be empty" });
    !phone && res.json({ error: "Phone number cannot be empty" });
    User.findOne({ phone }).then((userExists) => {
      if (userExists) {
        console.log("user exists");
      }
      const user = new User({
        name,
        phone,
        profilePic,
        about,
      });
      user
        .save()
        .then((usr) => console.log("user saved successfully"))
        .catch((err) => console.log(err));
      const token = jwt.sign({ id: user.id }, JWT_SECRET);
      res.json({
        token,
        user: { id, name, phone, profilePic, about },
      });
    });
  } catch (err) {
    console.log(err);
  }
};
