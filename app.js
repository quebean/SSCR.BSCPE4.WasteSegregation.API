const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')

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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require("./routes/userRoute");
const transactionRouter = require("./routes/transactionRoute");
const redeemRouter = require("./routes/redeemRoute");

app.use("/api/user", userRouter);
app.use("/api/transaction", transactionRouter);
app.use("/api/redeem", redeemRouter);

app.get("/test", (req, res) => {
    res.send("Hello from server!!!");
})