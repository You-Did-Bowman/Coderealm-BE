import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  verifyUser,
  googleLogin,
  forgotPassword,
  resetPassword,
  resendVerification,
  refreshToken,
} from "../controllers/authController.js";
import {
  validateUser,
  loginValidationUser,
} from "../middlewares/validateUser.js";
import { sendInviteMail } from "../utils/mail.js";

const router = express.Router();

router.post("/register", validateUser, registerUser);
router.post("/login", loginValidationUser, loginUser);
router.post("/logout", logoutUser);
router.post("/google-login", googleLogin);
router.get("/verify/:token", verifyUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/resend-verification", resendVerification);
router.post("/refresh-token", refreshToken);

// JB: send invite mail to a friend
router.post("/sendInviteMail", sendInviteMail
);

export default router;
