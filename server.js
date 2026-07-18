const express = require('express'); //express require

const app = express(); // express store in app variable, server instance

app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.get("/about", (req, res) => {
    res.send("About page");
})
app.get("/contact", (req, res) => {
    res.send("Contact page");
})

app.listen(3000, () => { //server start
    console.log('Server is running on port 3000');
});





