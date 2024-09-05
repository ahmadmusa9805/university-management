import { model, Schema, SchemaTypes } from "mongoose";
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentName,
  StudentModel,
} from "./interface";

const studentNameSchema = new Schema<TStudentName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: [true, "fatherName is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "fatherOccupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "fatherContactNo is required"],
  },
  motherName: { type: String, required: [true, "motherName is required"] },
  motherOccupation: {
    type: String,
    required: [true, "motherOccupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "motherContactNo is required"],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, "name is required"] },
  occupation: { type: String, required: [true, "occupation is required"] },
  contactNo: { type: String, required: [true, "contactNo is required"] },
  address: { type: String, required: [true, "address is required"] },
});

const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: [true, "id is required"], unique: true },
    name: { type: studentNameSchema, required: [true, "name is required"] },
    user: {
      type: SchemaTypes.ObjectId,
      required: [true, "user id is required"],
      unique: true,
      ref: "User",
    },
    dateOfBirth: { type: String },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message: "{VALUE} is not a valid gender",
      },
      required: [true, "Gender is required"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    contactNo: { type: String, required: [true, "contactNo is required"] },
    emergencyContactNo: {
      type: String,
      required: [true, "emergencyContactNo is required"],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        message: "{VALUE} is not valid bloodGroup name",
      },
    },
    presentAddress: {
      type: String,
      required: [true, "presentAddress is required"],
    },
    permanentAddress: {
      type: String,
      required: [true, "permanentAddress is required"],
    },
    guardian: {
      type: guardianSchema,
      required: [true, "guardian is information required"],
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, "localGuardian information is required"],
    },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "AcademicSemester",
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "AcademicDepartment",
    },
    profileImg: { type: String },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

studentSchema.virtual("fullName").get(function () {
  return `${this.name?.firstName} ${this.name?.middleName} ${this.name?.lastName}`;
});

// custom static method
studentSchema.static("isUserExists", async function isUserExists(id: string) {
  const userExist = await Student.findOne({ id });
  return userExist;
});

//creating a custom static method
// studentSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// custom instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const userExist = await Student.findOne({ id });
//   return userExist;
// };

// studentSchema.method("isUserExists", async function isUserExists(id: string) {
//   const userExist = await Student.findOne({ id });
//   return userExist;
// });
// export const Student = model<TStudent, StudentModel>("Student", studentSchema);

export const Student = model<TStudent, StudentModel>("Student", studentSchema);
