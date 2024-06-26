const mongoose = require("mongoose");
const { isEmail } = require("validator");

const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter yo email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Enter a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Enter yo password bro !"],
    minLength: [6, "Minimum passworld length is 6 characters"],
  },
});

// Call a func after doc saved to db

userSchema.post("save", function (doc, next) {
  console.log("new user was created and saved" + doc);

  next();
});

// fire  a func before doc saved to db

userSchema.pre("save", async function (next) {
  console.log("user about to be created :" + this);

  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

// static method to login user

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);

    if (auth) {
      return user;
    }
    throw Error("Incorrect password");
  }
  throw Error("Incorrect email");
};
const User = mongoose.model("user", userSchema);

module.exports = User;
