import express from "express";
import { academicDepartmentControllers } from "./controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { AcademicDepartmentValidations } from "./validation";

const router = express.Router();

router.post(
  "/create-academic-department",
  validateRequest(
    AcademicDepartmentValidations.createAcademicDepartmentValidationSchema,
  ),

  academicDepartmentControllers.createAcademicDepartment,
);

router.get(
  "/:facultyId",
  academicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  "/:facultyId",
  validateRequest(
    AcademicDepartmentValidations.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentControllers.updateSingleAcademicDepartment,
);

router.get("/", academicDepartmentControllers.getAllAcademicDepartments);

export const academicDepartmentRoute = router;
