import { useState } from "react";
const Home = () => {
  const [id, setID] = useState("");
  const [Attendance_Number, setAttendance] = useState("");
  const [error, setError] = useState("");
  const handler = async (e) => {
    e.preventDefault();
    const response = await fetch("/", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const json = await response.json();
    if (response.ok) {
      setAttendance("Attendances: " + (json.Attendance_Number + 1));
      setError("");
    } else {
      setAttendance("");
      setError(json.error);
    }
  };
  return (
    <form className="Home" onSubmit={handler}>
      <h2>Please Enter your ID:</h2>
      <input type={"text"} onChange={(e) => setID(e.target.value)} value={id} />
      <br></br>
      <button>Check Attendance</button>
      <br></br>
      <label>{Attendance_Number}</label>
      <label>{error}</label>
    </form>
  );
};
export default Home;
