const express = require("express");
const budget = require("./models/budget");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;

let bankAcc = 0;


// MIDDLEWARE
app.use(express.static("Public"))
app.use(express.urlencoded({ extended: false }))
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
        data: budget,
        money: bankAcc,
    })
})

// NEW
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs", {
        newData: budget,
    })
})

// CREATE
app.post("/budgets", (req, res) => {
    // separate tags data to an array
    let tags = req.body.tags.split(',');
    // set tags in body to an array
    req.body.tags = tags;
    budget.push(req.body)
    // console.log(budget)
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