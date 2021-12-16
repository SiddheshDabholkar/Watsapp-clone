const User = require("../../model/user");

module.exports = {
  Query: {
    async getUsers() {
      try {
        return await User.find();
      } catch (e) {
        throw new Error("no user exists");
      }
    },
  },
  Mutation: {
    async register(_, { name, phone }) {
      const newUser = new User({
        name,
        phone,
      });
      const res = await newUser.save();
      const token = await jwt.sign(
        {
          id: res._id,
          email: res.email,
          username: res.username,
          // phone: res.phone,
        },
        SECRET_KEY
      );
      return {
        ...res.toJSON(),
        id: res._id,
        token,
      };
    },
  },
};
