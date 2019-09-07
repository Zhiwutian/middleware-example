const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hey there big dude!</h1>");

});

app.listen(PORT, ()=>{
    console.log( "Server is running on port:", PORT);
});
