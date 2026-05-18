import { Router } from "express";

import {
  createUser,
  getUsers,
  deleteUser,
  updateUser
} from '../controller/controller.js'

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;


