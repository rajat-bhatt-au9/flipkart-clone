import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
  try {
    const userExist = await User.findOne({ username: req.body.username });
    if (userExist) {
      return res.status(401).json("username already exist");
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.status(200).json("User Registered Successfully");
  } catch (error) {
    console.log("error: ", error.message);
  }
};

export const userLogin = async (req, res) => {
  try {
    let userExist = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (userExist) {
      return res.status(200).json(`${req.body.username} login successfull`);
    } else {
      return res.status(401).json("Invalid Login");
    }
  } catch (err) {
    console.log("error: ", err.message);
  }
};
