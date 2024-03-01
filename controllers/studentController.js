const Student = require("../models/studentModel");

exports.createStudent = async (req, res) => {
  const { name, subject, marks } = req.body;
  try {
    const newStudent = new Student(name, subject, marks);
    const studentId = await newStudent.saveStudent();
    res.status(200).json({ message: "Student details saved ", studentId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllStudents = async (_, res) => {
  try {
    const students = await Student.getAllStudents();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.getStudentById(id);
    res.status(200).json(student);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.getStudentByName = async (req, res) => {
  const { name } = req.params;
  try {
    const student = await Student.getStudentByName(name);
    res.status(200).json(student);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.getStudentsBySubject = async (req, res) => {
  const { subject } = req.params;
  try {
    const students = await Student.getStudentsBySubject(subject);
    res.status(200).json(students);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

exports.updateStudentResults = async (req, res) => {
  const { id } = req.params;
  const { name, subject, marks } = req.body;

  try {
    await Student.updateStudentResults(id, { name, subject, marks });
    res.status(200).json({ message: "Student results successfully updated." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStudentData = async (req, res) => {
  const { id } = req.params;

  try {
    await Student.deleteStudentData(id);
    res.status(200).json({ message: "Student data deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
