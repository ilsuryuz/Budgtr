const express = require("express");
const budget = require("./models/budget");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log("Chicago is listening")
});
// MIDDLEWARE
app.use(express.static("Public"))
app.use(express.urlencoded({extended: false}))
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
        data: budget,
    })
})

app.get("/budgets/:index", (req, res)=> {
    res.render("show.ejs", {
        
    })
})