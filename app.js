const express = require("express");
const mongoose = require('mongoose');

const app = express();

const dbURI = "mongodb+srv://kejatori:kejatori1399@cluster0.jpd4b.mongodb.net/node-waste-segregation?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
})
    .then((result) => {
        console.log('Listening');
        app.listen(process.env.PORT || 80);
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tagsRouter = require("./routes/tagsRoute");

app.use("/tags", tagsRouter);

app.get("/test", (req, res) => {
    res.send("Hello from server!!!");
})