const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render("index");
})

app.post('/login', (req,res) => {
    // use the credentials from req variable and perform login action
    
    res.send("Thank you !!!");
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})