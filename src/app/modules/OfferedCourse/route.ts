import express from "express";
import { OfferedCourseControllers } from "./controller";
import { OfferedCourseValidations } from "./validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

router.get("/", OfferedCourseControllers.getAllOfferedCourses);

router.get("/:id", OfferedCourseControllers.getSingleOfferedCourses);

router.post(
  "/create-offered-course",
  validateRequest(OfferedCourseValidations.createOfferedCourseValidationSchema),
  OfferedCourseControllers.createOfferedCourse,
);

router.patch(
  "/:id",
  validateRequest(OfferedCourseValidations.updateOfferedCourseValidationSchema),
  OfferedCourseControllers.updateOfferedCourse,
);

router.delete("/:id", OfferedCourseControllers.deleteOfferedCourse);

export const offeredCourseRoutes = router;
