const express = require("express");
const router = express.Router();
const studentCtrl = require("../controllers/studentController");

router.post("/", studentCtrl.createStudent);
router.get("/", studentCtrl.getAllStudents);
router.get("/:id", studentCtrl.getStudentById);
router.get("/by/name/:name", studentCtrl.getStudentByName);
router.get("/by/sub/:subject", studentCtrl.getStudentsBySubject);
router.put("/:id", studentCtrl.updateStudentResults);
router.delete("/:id", studentCtrl.deleteStudentData);

module.exports = router;
