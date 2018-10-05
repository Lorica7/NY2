const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use("/api", apiRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}`);
});
