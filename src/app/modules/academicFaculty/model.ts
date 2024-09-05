import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./interface";

export const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicFaculty = model<TAcademicFaculty>(
  "AcademicFaculty",
  academicFacultySchema,
);
