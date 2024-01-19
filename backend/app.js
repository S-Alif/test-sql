const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "test"
})

db.connect((err) => {
  if(err){
    console.log(err)
    return
  }
  console.log("databse connected")
})

// fetching data from databse
app.get('/', (req, res) => {
  try {
    const query = "SELECT * FROM users"
   db.query(query, (err, data) => {
      if(err){
        res.json({status: 0, data: "could not get data"})
        return
      }
      res.json({ status: 1, data: data })
    })
  } catch (error) {
    res.json({ status: 0, data: "something went wrong" })
  }
})

// posting data to database
app.post('/create', (req, res) => {
  try {
    const query = "INSERT INTO `users` (`id`, `name`, `gender`, `age`, `img`) VALUES (?)"

    const values = [req.body.id, req.body.name, req.body.gender, req.body.age, req.body.img]

   db.query(query, [values], (err, data) => {
      if (err) {
        res.json({ status: 0, data: "could not create account"})
        return
      }
      res.json({ status: 1, data: "account created" })
    })
  } catch (error) {
    res.json({ status: 0, data: "something went wrong" })
  }
})

module.exports = app