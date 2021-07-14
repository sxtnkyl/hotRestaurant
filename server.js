// Dependencies

const express = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = process.env || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data for waitList page
//object is a reservation's data
//first 5 = seated, after = waiting

const reservationList = [
  {
    //reservation data
  },
];

// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "homePage.html")));

app.get("/form", (req, res) => res.sendFile(path.join(__dirname, "form.html")));

// Displays all characters
app.get("/api/reservationList", (req, res) => res.json(reservationList));

// Not needed but here it is
app.get("/api/reservationList/:item", (req, res) => {
  const item = req.params.item;
  //string for unniqueID
  console.log(item);

  let itemIndex = reservationList.indexOf(); //TODO: write logic to find uniqueID in reservationList

  return res.json(false);
});

// Create New Reservation
app.post("/api/reservation", (req, res) => {
  const newReservation = req.body;
  reservationList.push(newReservation);
  res.json("reservation added!");
});

app.delete("/api/deleteAll", (req, res) => {
  //TODO: delete reservationList
});

app.delete("/api/singleReservation", (req, res) => {
  //TODO: find item in reservationList and remove it
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
