# 🧠 Online Quiz App (Full Stack):-

This is a simple full-stack online quiz application using **Node.js**, **Express**, **EJS**, and **MySQL**.

---

## 📦 Features:-

- Display multiple-choice questions
- Submit answers and calculate score
- Dynamic rendering using EJS
- Stores quiz questions in MySQL database

---

## 🛠️ Tech Stack:-

- **Frontend**: EJS Templates, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MySQL

---

## 🚀 Getting Started:-

### 1. Clone the Repository:

bash
git clone <your-repo-url>
cd online-quiz


### 2. Setup MySQL:-

- Create a database named  quizDB:

sql
CREATE DATABASE quizDB;
USE quizDB;

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question TEXT NOT NULL,
  option1 VARCHAR(255),
  option2 VARCHAR(255),
  option3 VARCHAR(255),
  option4 VARCHAR(255),
  answer VARCHAR(255)
);


Import questions:-
  sql
SOURCE insert_fullstack_quiz.sql;

### 3. Install Dependencies:-

 bash
 npm install


### 4. Run the Server:-

bash
node server.js


Visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Folder Structure:-

online-quiz/
│
├── views/
│   ├── quiz.ejs
│   └── result.ejs
│
├── public/
│   └── style.css
│
├── server.js
├── insert_fullstack_quiz.sql
└── README.md

---
                                            

## ✍️ Author:-

👤 Sandeep Kumar Yadav

GitHub: @sandeepkumaryadav05

Email: sandeepyadav051003@gmail.com

