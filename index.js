const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Guest = require("./guests");
const reader = require("xlsx");
require("dotenv").config();
MONGOURI =
  "mongodb+srv://mohamedhatem:abcd@cluster0.d31talr.mongodb.net/?retryWrites=true&w=majority";
const file = reader.readFile(
  "Accepted Non-Gucian Registrations_sessions_Qr.xlsx"
);
app.use(express.json()); //Very important...!!!!
const port = process.env.PORT || 5000;
app.post("/", async (req, res) => {
  const sheets = file.SheetNames;
  const guest = "";
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach(async (object) => {
      guest = await Guest.create(object);
    });
  }
  return res.json(guest);
});
app.patch("/", async (req, res) => {
  try {
    const guestTemp = await Guest.findOne({ id: req.body.id });
    console.log(guestTemp);
    const guest = await Guest.findOneAndUpdate(
      { id: req.body.id },
      { Attendance_Number: guestTemp.Attendance_Number + 1 }
    );
    return res.json(guest);
  } catch (error) {
    return res.status(404).json({ error: "ID does not Exist" });
  }
});

mongoose
  .connect(MONGOURI)
  .then(() => {
    app.listen(port, () => console.log("Connected to port " + port));
  })
  .catch((error) => {
    console.log(error);
  });
