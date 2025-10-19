const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const review = require("./routes/review");
const listing = require("./routes/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req,res) => {
    res.send('this is root');
});

//Routes
app.use("/listings", listing);
app.use("/listings/:id/reviews", review);


app.use((req,res,next) => {
    next(new ExpressError(404, "Page Not Found !"));
});

app.use((err,req,res,next) => {
    let {statusCode = 500, message = "Something Went Wrong"} = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", {err});
})

app.listen(8080, () => {
    console.log('Server is listening to port 8080');
});