import express from "express";
import { AdminControllers } from "./controller";
import { updateAdminValidationSchema } from "./validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

router.get("/", AdminControllers.getAllAdmins);

router.get("/:id", AdminControllers.getSingleAdmin);

router.patch(
  "/:id",
  validateRequest(updateAdminValidationSchema),
  AdminControllers.updateAdmin,
);

router.delete("/:id", AdminControllers.deleteAdmin);

export const AdminRoutes = router;
