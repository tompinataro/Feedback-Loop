const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// TODO: This route adds a new feedback entry
router.post("/", (req, res) => {
  let feedbackToAdd = req.body;
   
 let sqlText = `
   INSERT INTO "feedback" 
   ("feeling", "understanding", "support", "comments")
   VALUES
   ($1, $2, $3, $4)
  `
let sqlValues = [feedbackToAdd.a, feedbackToAdd.b, feedbackToAdd.c, feedbackToAdd.d]

pool.query(sqlText, sqlValues)
.then((dbResponse) => {
  res.sendStatus(201)
})
.catch((dbErr)=>{
  console.log(`SQL Query error in POST /api/feelings: `, dbErr)
      res.sendStatus(500)
})

});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get("/", (req, res) => {
  console.log("testing");
  const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
