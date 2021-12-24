const Group = require("../models/Group");

exports.create = (req, res) => {
  const { name, description } = req.body;
  try {
    !name && res.json({ error: "Group name cannot be empty" });

    const group = new Group({
      name,
      description,
    });
    group
      .save()
      .then((gr) => console.log("group created sucessfully"))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

exports.delete = (req, res) => {
  const { id } = req.body;
  Group.findByIdAndRemove({ id }).then((gr) => res.status(200).send(gr));
};
