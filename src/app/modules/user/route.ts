import express from "express";
import { userControllers } from "./controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { StudentValidations } from "../student/validation";
import { createFacultyValidationSchema } from "../faculty/validation";
import { createAdminValidationSchema } from "../admin/validation";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(StudentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);

router.post(
  "/create-faculty",
  validateRequest(createFacultyValidationSchema),
  userControllers.createFaculty,
);

router.post(
  "/create-admin",
  validateRequest(createAdminValidationSchema),
  userControllers.createAdmin,
);

export const userRoute = router;
