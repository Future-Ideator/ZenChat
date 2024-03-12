import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't Match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    //HASH PASSWORD HERE

    //https://avatar-placeholder.iran.liara.run/
  } catch (error) {}
};

export const login = async (req, res) => {
  console.log("loginUser");
};

export const logout = async (req, res) => {
  console.log("logoutUser");
};
