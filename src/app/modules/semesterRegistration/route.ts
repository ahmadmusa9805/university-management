import express from "express";
import { SemesterRegistrationController } from "./controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { SemesterRegistrationValidations } from "./validation";

const router = express.Router();

router.post(
  "/create-semester-registration",
  validateRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
);

router.get(
  "/:id",
  SemesterRegistrationController.getSingleSemesterRegistration,
);

router.patch(
  "/:id",
  validateRequest(
    SemesterRegistrationValidations.updateSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.updateSemesterRegistration,
);

router.delete(
  "/:id",
  SemesterRegistrationController.deleteSemesterRegistration,
);

router.get("/", SemesterRegistrationController.getAllSemesterRegistrations);

export const semesterRegistrationRoutes = router;
