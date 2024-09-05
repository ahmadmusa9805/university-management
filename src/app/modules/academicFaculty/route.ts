import express from "express";
import { academicFacultyControllers } from "./controller";
import { AcademicFacultyValidations } from "./validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidations.createAcademicFacultyValidationSchema,
  ),

  academicFacultyControllers.createAcademicFaculty,
);

router.get("/:facultyId", academicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  "/:facultyId",
  validateRequest(
    AcademicFacultyValidations.updateAcademicFacultyValidationSchema,
  ),
  academicFacultyControllers.updateSingleAcademicFaculty,
);

// router.delete("/:FacultyId", academicFacultyControllers.);
router.get("/", academicFacultyControllers.getAllAcademicFaculties);

export const academicFacultyRoute = router;
