import { Router } from "express";

import { userController } from "../controllers";

const router = Router();
router.get("/users", userController.getAllUser);
router.get("/user/:id", userController.getUserById);
router.post("/user/create", userController.createUser);
router.patch("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.removeUser);

export default router;
