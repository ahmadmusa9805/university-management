import { z } from "zod";

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      id: z.string({
        required_error: "id is required",
        invalid_type_error: "id must be a string",
      }),

      name: z.object({
        firstName: z.string({
          required_error: "firstName is required",
          invalid_type_error: "firstName must be a string",
        }),
        middleName: z
          .string({
            invalid_type_error: "middleName must be a string",
          })
          .optional(),
        lastName: z.string({
          required_error: "lastName is required",
          invalid_type_error: "lastName must be a string",
        }),
      }),
      dateOfBirth: z.string({
        required_error: "dateOfBirth is required",
        invalid_type_error: "dateOfBirth must be a string",
      }),
      gender: z
        .string({
          invalid_type_error: "Name must be a string",
        })
        .optional(),
      email: z.string({
        required_error: "email is required",
        invalid_type_error: "email must be a string",
      }),
      contactNo: z.string({
        required_error: "contactNo is required",
        invalid_type_error: "contactNo must be a string",
      }),
      emergencyContactNo: z.string({
        required_error: "emergencyContactNo is required",
        invalid_type_error: "emergencyContactNo must be a string",
      }),
      bloodGroup: z.string({
        required_error: "bloodGroup is required",
        invalid_type_error: "bloodGroup must be a string",
      }),
      presentAddress: z.string({
        required_error: "presentAddress is required",
        invalid_type_error: "presentAddress must be a string",
      }),
      permanentAddress: z.string({
        required_error: "permanentAddress is required",
        invalid_type_error: "permanentAddress must be a string",
      }),
      guardian: z.object({
        fatherName: z.string({
          required_error: "fatherName is required",
          invalid_type_error: "fatherName must be a string",
        }),
        fatherOccupation: z.string({
          required_error: "fatherOccupation is required",
          invalid_type_error: "fatherOccupation must be a string",
        }),
        fatherContactNo: z.string({
          required_error: "fatherContactNo is required",
          invalid_type_error: "fatherContactNo must be a string",
        }),
        motherName: z.string({
          required_error: "motherName is required",
          invalid_type_error: "motherName must be a string",
        }),
        motherOccupation: z.string({
          required_error: "motherOccupation is required",
          invalid_type_error: "motherOccupation must be a string",
        }),
        motherContactNo: z.string({
          required_error: "motherContactNo is required",
          invalid_type_error: "motherContactNo must be a string",
        }),
      }),
      localGuardian: z.object({
        name: z.string({
          required_error: "name is required",
          invalid_type_error: "name must be a string",
        }),
        occupation: z.string({
          required_error: "occupation is required",
          invalid_type_error: "occupation must be a string",
        }),
        contactNo: z.string({
          required_error: "contactNo is required",
          invalid_type_error: "contactNo must be a string",
        }),
        address: z.string({
          required_error: "address is required",
          invalid_type_error: "address must be a string",
        }),
      }),
      profileImg: z.string({ required_error: "profileImg is required" }),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

const updateStudentValidationSchema = z.object({
  body: z.object({
    student: z.object({
      id: z
        .string({
          invalid_type_error: "id must be a string",
        })
        .optional(),

      name: z.object({
        firstName: z
          .string({
            invalid_type_error: "firstName must be a string",
          })
          .optional(),
        middleName: z
          .string({
            invalid_type_error: "middleName must be a string",
          })
          .optional(),
        lastName: z
          .string({
            invalid_type_error: "lastName must be a string",
          })
          .optional(),
      }),
      dateOfBirth: z
        .string({
          invalid_type_error: "dateOfBirth must be a string",
        })
        .optional(),
      gender: z
        .string({
          invalid_type_error: "Name must be a string",
        })
        .optional(),
      email: z
        .string({
          invalid_type_error: "email must be a string",
        })
        .optional(),
      contactNo: z
        .string({
          invalid_type_error: "contactNo must be a string",
        })
        .optional(),
      emergencyContactNo: z
        .string({
          invalid_type_error: "emergencyContactNo must be a string",
        })
        .optional(),
      bloodGroup: z
        .string({
          invalid_type_error: "bloodGroup must be a string",
        })
        .optional(),
      presentAddress: z
        .string({
          invalid_type_error: "presentAddress must be a string",
        })
        .optional(),
      permanentAddress: z
        .string({
          invalid_type_error: "permanentAddress must be a string",
        })
        .optional(),
      guardian: z
        .object({
          fatherName: z
            .string({
              invalid_type_error: "fatherName must be a string",
            })
            .optional(),
          fatherOccupation: z
            .string({
              invalid_type_error: "fatherOccupation must be a string",
            })
            .optional(),
          fatherContactNo: z
            .string({
              invalid_type_error: "fatherContactNo must be a string",
            })
            .optional(),
          motherName: z
            .string({
              invalid_type_error: "motherName must be a string",
            })
            .optional(),
          motherOccupation: z
            .string({
              invalid_type_error: "motherOccupation must be a string",
            })
            .optional(),
          motherContactNo: z
            .string({
              invalid_type_error: "motherContactNo must be a string",
            })
            .optional(),
        })
        .optional(),
      localGuardian: z
        .object({
          name: z
            .string({
              invalid_type_error: "name must be a string",
            })
            .optional(),
          occupation: z
            .string({
              invalid_type_error: "occupation must be a string",
            })
            .optional(),
          contactNo: z
            .string({
              invalid_type_error: "contactNo must be a string",
            })
            .optional(),
          address: z
            .string({
              invalid_type_error: "address must be a string",
            })
            .optional(),
        })
        .optional(),
      profileImg: z
        .string({ required_error: "profileImg is required" })
        .optional(),
    }),
    admissionSemester: z.string().optional(),
    academicDepartment: z.string().optional(),
  }),
});

export const StudentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};

//==================
// import { z } from "zod";

// const userNameValidationSchema = z.object({
//   firstName: z
//     .string()
//     .min(1)
//     .max(20)
//     .refine((value) => /^[A-Z]/.test(value), {
//       message: "First Name must start with a capital letter",
//     }),
//   middleName: z.string(),
//   lastName: z.string(),
// });

// const guardianValidationSchema = z.object({
//   fatherName: z.string(),
//   fatherOccupation: z.string(),
//   fatherContactNo: z.string(),
//   motherName: z.string(),
//   motherOccupation: z.string(),
//   motherContactNo: z.string(),
// });

// const localGuardianValidationSchema = z.object({
//   name: z.string(),
//   occupation: z.string(),
//   contactNo: z.string(),
//   address: z.string(),
// });

// export const createStudentValidationSchema = z.object({
//   body: z.object({
//     password: z.string().max(20),
//     student: z.object({
//       name: userNameValidationSchema,
//       gender: z.enum(["male", "female", "other"]),
//       dateOfBirth: z.string().optional(),
//       email: z.string().email(),
//       contactNo: z.string(),
//       emergencyContactNo: z.string(),
//       bloogGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
//       presentAddress: z.string(),
//       permanentAddress: z.string(),
//       guardian: guardianValidationSchema,
//       localGuardian: localGuardianValidationSchema,
//       admissionSemester: z.string(),
//       profileImg: z.string(),
//     }),
//   }),
// });

// export const studentValidations = {
//   createStudentValidationSchema,
// };
