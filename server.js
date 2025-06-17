const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sandy.051003",
  database: "quizDB"
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM questions", (err, results) => {
    if (err) throw err;
    res.render("quiz", { questions: results });
  });
});

app.post("/submit", (req, res) => {
  const userAnswers = req.body;
  db.query("SELECT * FROM questions", (err, questions) => {
    if (err) throw err;
    let score = 0;
    questions.forEach(q => {
      if (
        String(userAnswers[q.id]).trim() === String(q.answer).trim()
      ) {
        score++;
      }
    });
    res.render("result", {
      score: score,
      total: questions.length,
      questions,
      userAnswers
    });
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});