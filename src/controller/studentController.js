import { findAllStudents } from "../service/studentService";

const getAllStudents = (req, res) => {
  res.status(200).json(findAllStudents());
};

export { getAllStudents };
