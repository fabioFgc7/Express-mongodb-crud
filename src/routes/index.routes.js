import { Router } from "express";
import {
  renderTasks,
  renderAbout,
  renderDelete,
  renderEdit,
  renderToggleDone,
  renderUdapte,
  createTasks,
} from "../controllers/task.controller";
const router = Router();
router.get("/", renderTasks);
router.post("/tasks/add", createTasks);
router.get("/about", renderAbout);
router.get("/tasks/:id/edit", renderEdit);

router.post("/tasks/:id/update", renderUdapte);
router.get("/tasks/:id/delete", renderDelete);
router.get("/tasks/:id/toggleDone", renderToggleDone);

export default router;
