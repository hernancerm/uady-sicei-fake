"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// Data
const students = [
  {
    fullName: "Hernán Cervera",
    enrollmentId: "12218890",
  },
  {
    fullName: "Juan Sauri",
    enrollmentId: "92465587",
  },
  {
    fullName: "Emilia Grace",
    enrollmentId: "56567894",
  },
  {
    fullName: "Alejandra Gutiérrez",
    enrollmentId: "23238945",
  },
  {
    fullName: "Pedro Manzanilla",
    enrollmentId: "77778945",
  },
];

// App
const app = express();
app.get("/students", (req, res) => {
  res.send(students);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
