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
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "homePage.html")));

app.get("/form", (req, res) => res.sendFile(path.join(__dirname, "form.html")));

app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);

// Displays all reservations
app.get("/api/reservationList", (req, res) =>
  res.status(200).json(reservationList)
);

// BONUS POINTS
// app.get("/api/reservationList/:item", (req, res) => {
//   const item = req.params.item;
//   //string for unniqueID
//   console.log(item);

//   let itemIndex = reservationList.indexOf(); //TODO: write logic to find uniqueID in reservationList

//   return res.json(false);
// });

// Create New Reservation
app.post("/api/reservation", (req, res) => {
  const newReservation = req.body;
  let { name, number, email, id } = newReservation;
  let obj = {
    name: name,
    number: number,
    email: email,
    id: id,
  };
  reservationList.push(obj);
  res.status(200).json("reservation added!");
});

app.delete("/api/deleteAll", (req, res) => {
  //TODO: delete reservationList
  reservationList = [];
  res.status(200);
});

app.delete("/api/singleReservation/:uniqueID", (req, res) => {
  let resId = req.params.uniqueID;
  for (let i = 0; i < reservationList.length; i++) {
    let current = reservationList[i];
    if (current.id === resId) {
      //remove from list
      reservationList.splice(i, 1);
      return res.status(200);
    }
  }
});

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
