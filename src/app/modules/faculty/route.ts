import express from "express";
import { FacultyControllers } from "./controller";
import { updateFacultyValidationSchema } from "./validation";
import { validateRequest } from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/:id", auth("admin"), FacultyControllers.getSingleFaculty);

router.patch(
  "/:id",
  validateRequest(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete("/:id", FacultyControllers.deleteFaculty);

router.get("/", auth("admin"), FacultyControllers.getAllFaculties);

export const FacultyRoutes = router;
