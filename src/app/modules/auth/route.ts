import express from "express";
import { validateRequest } from "../../middlewares/validateRequest";
import { AuthValidation } from "./validation";
import { AuthControllers } from "./controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/constant";

const router = express.Router();

router.post(
  "/login",
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);

router.post(
  "/change-password",
  auth(USER_ROLE.admin, USER_ROLE.faculty, USER_ROLE.student),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthControllers.changePassword,
);

router.post(
  "/refresh-token",
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthControllers.refreshToken,
);

export const authRoutes = router;
