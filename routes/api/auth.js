const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateContactBody, authenticate, upload } = require('../../middlewares');

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateContactBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.get("/verify", validateContactBody(schemas.verifyEmailSchema), ctrl.resendVerifyEmail);

router.post("/login", validateContactBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.get("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;