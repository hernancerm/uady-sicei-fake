import { getAllStudents } from "../controller/studentController";

import { Router } from "express";

const router = new Router();

router.route("/students").get(getAllStudents);

export default router;
