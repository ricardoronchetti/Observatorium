const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    username: {
      type: String,
      minlength: [4, "El nombre de usuario tiene que tener mínimo 4 caracteres"],
      trim: true,
      required: [true, "indica el nombre de usuario"],
      unique: true
    },
    email: {
      type: String,
      required: [true, "Indica el email"],
      unique: true,
      lowercase: true,
      trim: true
    },
    imgProfile: {
      type: String
    },
    passwordHash: {
      type: String,
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    },
  }, 
  {
    timestamps: true
  }
)

const User = model("User", userSchema)

User.syncIndexes()

module.exports = User
