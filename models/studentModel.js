const db = require("../firebaseConfig");

class Student {
  constructor(name, subject, marks) {
    this.name = name;
    this.subject = subject;
    this.marks = marks;
  }

  async saveStudent() {
    try {
      const newStudentRef = await db.collection("student").add({
        name: this.name,
        subject: this.subject,
        marks: this.marks,
      });
      return newStudentRef.id;
    } catch (err) {
      console.error("Error adding student : ", err);
      throw err;
    }
  }

  static async getAllStudents() {
    try {
      const snapshot = await db.collection("student").get();
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (err) {
      console.error("Error getting students : ", err);
      throw err;
    }
  }

  static async getStudentById(id) {
    try {
      const doc = await db.collection("student").doc(id).get();
      if (!doc.exists) {
        throw new Error("Student not found.");
      }
      return { id: doc.id, ...doc.data() };
    } catch (err) {
      console.error("Error getting student by id : ", err);
      throw err;
    }
  }

  static async getStudentByName(name) {
    try {
      const snapshot = await db
        .collection("student")
        .where("name", "==", name)
        .get();
      if (snapshot.empty) {
        throw new Error("Sudent not found.");
      }
      const doc = snapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    } catch (err) {
      console.error("Error getting student by name : ", err);
      throw err;
    }
  }

  static async getStudentsBySubject(subject) {
    try {
      const snapshot = await db
        .collection("student")
        .where("subject", "==", subject)
        .get();
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (err) {
      console.error("Error getting students by subject : ", err);
      throw err;
    }
  }

  static async updateStudentResults(id, data) {
    try {
      await db.collection("student").doc(id).update(data);
      return "Student updated successfully.";
    } catch (err) {
      console.error("Error updating students data : ", err);
      throw err;
    }
  }

  static async deleteStudentData(id) {
    try {
      await db.collection("student").doc(id).delete();
      return "Student data deleted successfully.";
    } catch (err) {
      console.error("Error removing students data : ", err);
      throw err;
    }
  }
}

module.exports = Student;
