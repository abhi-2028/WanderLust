const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing");
const path = require("path");

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

app.get("/", (req,res) => {
    res.send('this is root');
})

//Index Route
app.get("/listings", async(req,res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", {allListings});
})

//New Route
app.get("/listings/new", (req,res) => {
    res.render("./listings/new.ejs")
})

//Show Route
app.get("/listings/:id", async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs", {listing});
})

//Create Route
app.post("/listings", async (req, res) => {
  console.log(req.body); // <-- check output here
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});


// app.get("/test", async(req,res)=> {
//     let samplelisting = new Listing({
//         title: "my new house",
//         description: "by the kotha",
//         price: 999,
//         location: "Krishnagar, Nadia",
//         country: "India",
//     });

//     await samplelisting.save();
//     console.log("sample was saved");
//     res.send("saved");
// })

app.listen(8080, () => {
    console.log('Server is listening to port 8080');
});