const express = require("express");
const app = express();
const PORT = 8000;

// middleware
app.use(express.urlencoded({extended: true}))
app.get("/", (req, res) => {
    return res.send("Homepage");
});

app.get("/about", (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});

app.listen(PORT, ()=> console.log(`serve is startes in ${PORT} `));