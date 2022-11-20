const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Guest = new Schema(
  {
    "First name": { type: String },
    "Last name": { type: String },
    City: { type: String },
    "Country ": { type: String },
    Email: { type: String },
    "Phone number": { type: Number },
    "University ": { type: String },
    Faculty: { type: String },
    Specialization: { type: String },
    "Academic degree": { type: String },
    "Google Scholar / Scopus / LinkedIn account": {
      type: String,
    },
    Attendance: { type: String },
    Certificate: { type: String },
    "Please write two short sentences on why you wish to attend the workshop.1":
      {
        type: String,
      },
    Role: { type: String },
    name: { type: String },
    id: { type: String },
    QR_code: { type: String },
    Timestamps: { type: Number },
    Attendance_Number: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Guests", Guest);
