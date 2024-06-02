import { Router } from "express";
import {
  createProject,
  createProjectData,
  updateProjectData,
} from "../controllers/project.js";

const router = Router();

router.post("/create", createProject);
router.post("/data/create", createProjectData);
router.post("/data/update", updateProjectData);

export default router;
