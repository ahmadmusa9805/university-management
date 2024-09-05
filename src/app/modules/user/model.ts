import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { TUser, UserModel } from "./interface";
import config from "../../config";

const userSchema = new Schema<TUser, UserModel>(
  {
    id: { type: String, required: [true, "id is required"] },
    password: { type: String, required: true, select: 0 },
    needsPasswordChange: { type: Boolean, default: true },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  //  eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
//

userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findOne({ id }).select("+password");
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number,
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model<TUser, UserModel>("User", userSchema);
