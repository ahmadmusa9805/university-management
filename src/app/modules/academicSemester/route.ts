import express from "express";
import { academicSemesterControllers } from "./controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { AcademicSemesterValidations } from "./validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(AcademicSemesterValidations.createAcademicValidationSchema),
  academicSemesterControllers.createAcademicSemester,
);

router.get(
  "/:facultyId",
  academicSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  "/:facultyId",
  validateRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterControllers.updateSingleAcademicSemester,
);

router.get("/", academicSemesterControllers.getAllAcademicSemesters);

export const academicSemesterRoute = router;
