import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./interface";
import { AcademicSemesterCode, AcademicSemesterName, Months } from "./constant";

export const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      enum: AcademicSemesterName,
      required: true,
    },
    code: {
      type: String,
      enum: AcademicSemesterCode,
      required: true,
    },
    year: String,
    startMonth: {
      type: String,
      enum: Months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: Months,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

academicSemesterSchema.pre("save", async function (next) {
  const AcademicSemesterExist = await AcademicSemester.findOne({
    name: this.name,
    year: this.year,
  });

  if (AcademicSemesterExist) {
    throw new Error("AcademicSemester is already exist!");
  }

  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema,
);
