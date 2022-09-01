const express = require("express");
const budget = require("./models/budget");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;


// MIDDLEWARE
app.use(express.static("Public"))
app.use(express.urlencoded({ extended: false }))
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
        data: budget,
    })
})

// NEW
app.get("budgets/new", (req, res) => {
    res.render("new.ejs", {
        newData: budget,
    })
})

// CREATE
app.post("/budgets", (req, res) => {
    budget.push(req.body)
    console.log(budget)
    res.redirect("/budgets")
})

// SHOW
app.get("/budgets/:index", (req, res) => {
    res.render("show.ejs", {
        dataIndex: budget[req.params.index],
    })
})

app.listen(port, () => {
    console.log("Chicago is listening")
});