import { z } from "zod";

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Academic Department is required",
      invalid_type_error: "Academic Department must be a string",
    }),
    academicFaculty: z.string({
      invalid_type_error: "Academic faculty must be string",
      required_error: "Academic Department is required",
    }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Academic Department is required",
        invalid_type_error: "Academic Department must be a string",
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: "Academic faculty must be string",
        required_error: "Academic Department is required",
      })
      .optional(),
  }),
});

export const AcademicDepartmentValidations = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
