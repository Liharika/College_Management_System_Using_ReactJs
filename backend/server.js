const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login2 (name, email, password) VALUES (?,?,?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password,
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Signup Error:", err);
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login2 WHERE `email`=? AND `password`=?";
  console.log("Login Request Body:", req.body);

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error("Login Error:", err);
      return res.json("Error");
    }
    console.log("Login Query Result:", data);
    if (data.length > 0) {
      return res.json("success");
    } else {
      return res.json("fail");
    }
  });
});
app.post('/register', (req, res) => {
  const sql = "INSERT INTO registration (firstName, lastName, rollNumber,mobileNumber, email, password,  eamcetRank, branch, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.rollNumber,
    req.body.mobileNumber,
    req.body.email,
    req.body.password,
    req.body.eamcetRank,
    req.body.branch,
    req.body.address,
    
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Registration Error:", err);
      return res.json("Error");
    }
    return res.json("Registration success");
  });
});

app.post('/registerFaculty', (req, res) => {
  const sql = "INSERT INTO faculty (firstName, lastName,  facultyId, experience,salary, course,qualification) VALUES (?, ?, ?, ?, ?, ?,?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.facultyId,
    req.body.experience,
    req.body.salary,
    req.body.course,
    req.body.qualification,
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Faculty Registration Error:", err);
      return res.json("Error");
    }
    return res.json("Faculty Registration success");
  });
});
const port = 8081;
app.listen(port, () => {
  console.log("Server listening on port", port);
});
