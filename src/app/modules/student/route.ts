import express from "express";
import { studentControllers } from "./controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { StudentValidations } from "./validation";

const router = express.Router();

router.get("/:studentId", studentControllers.getSingleStudent);
router.patch(
  "/:studentId",
  validateRequest(StudentValidations.updateStudentValidationSchema),
  studentControllers.updateSingleStudent,
);
router.delete("/:studentId", studentControllers.deleteSingleStudent);
router.get("/", studentControllers.getAllStudents);

export const studentRoute = router;
