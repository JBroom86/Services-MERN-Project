/* Require modules
--------------------------------------------------------------- */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const srvCtrl = require("./controllers/services");
const userCtrl = require("./controllers/users");

/* Create the Express app
--------------------------------------------------------------- */
const app = express();

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require("./models");

/* Middleware (app.use)
--------------------------------------------------------------- */
// cross origin allowance
app.use(cors());
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "dist")));

/* Mount routes
--------------------------------------------------------------- */
// When a GET request is sent to `/seed`, the service collection is seeded
app.get("/seed", function (req, res) {
  // Remove any existing services
  db.Service.deleteMany({}).then((removedServices) => {
    console.log(`Removed ${removedServices.deletedCount} services.`);
    // Seed the service collection with the seed data
    db.Service.insertMany(db.serviceSeed).then((addedServices) => {
      console.log(`Added ${addedServices.length} services to the database.`);
      res.json(addedServices);
    });
  });
});

// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});


//This tells our app to look at the 'controllers/services.js' file to handle all routes that begin with 'localhost:3000/services
app.use("/services", srvCtrl);
app.use("/users", userCtrl);

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
  console.log("Express is listening to port", process.env.PORT);
});
