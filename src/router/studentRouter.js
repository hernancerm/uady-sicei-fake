import StudentController from "../controller/StudentController";
import StudentService from "../service/studentService";

import { Router } from "express";

const studentController = StudentController(StudentService());
const router = new Router();

router.route("/students").get(studentController.getAll);

export default router;
