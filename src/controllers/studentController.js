import { findAllStudents } from "../services/studentService";

const getAllStudents = (req, res) => {
  res.status(200).json(findAllStudents());
};

export { getAllStudents };
