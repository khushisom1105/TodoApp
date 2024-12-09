const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const { createUser, getUserById } = require("../services/userOperation");
const { setUser, getuser } = require("../services/userAuth");
require("dotenv").config();

const signUp = async (req, res) => {

  const {fullName , uname , phone, email, password ,role} = req.body;

  try {
    const existingUser = await getUserById({ email });
    const existingUserPhone = await getUserById({ phone });
    if (existingUser || existingUserPhone) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "User already registered.",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userData = {
      fullName,
      uname,
      phone,
      email,
      hashPassword, 
      role
    };

    const user = await createUser(userData);
    res.status(StatusCodes.OK).json({
      success: true,
      data: user,
      message: "User Registerd Successfully"
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
const signIn = async (req, res) => {

  const { email, password } = req.body;

  try {
    user = await getUserById({ email });
    console.log(user.hashPassword);
    if (user != null) {
      if (await user.authenticate(password, user.hashPassword)) {
        const token = setUser(user.id, user.email);

        const { _id, fullName, phone, email } = user;
        return res.status(StatusCodes.OK).json({       
          token,
          user: { _id, fullName, phone, email },
          message: "Login Successful"
        });
      } else {
        return res.status(StatusCodes.UNAUTHORIZED).json({
          message: "Invalid Password.",
        });
      }
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "User does not exist..!",
      });
    }
  } catch(error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

module.exports = { signUp , signIn};


