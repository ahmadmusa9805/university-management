import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./interface";
import AppError from "../../errors/appError";
import httpStatus from "http-status";

export const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: [true, "academicFaculty id is required"],
      unique: true,
      ref: "AcademicFaculty",
    },
  },
  {
    timestamps: true,
  },
);

academicDepartmentSchema.pre("save", async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "This department is already exist!",
    );
  }

  next();
});

academicDepartmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne(query);

  if (!isDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "This department does not exist! ",
    );
  }

  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  "AcademicDepartment",
  academicDepartmentSchema,
);
