const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    students: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Student",
    },
  },
  {
    versionKey: false,
  }
);

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
    previousMentor:{type:[mongoose.Schema.Types.ObjectId],ref:"Mentor",default: []}
  },
  {
    versionKey: false,
  }
);
const Mentor = mongoose.model("Mentor", mentorSchema);
const Student = mongoose.model("Student", studentSchema);


module.exports = { Mentor, Student };
