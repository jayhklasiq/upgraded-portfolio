const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const homeRoute = require("./routes/homeRoutes")
const static = require("./routes/static")

const app = express()

// Set the view engine to EJS & set it to use EJS layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("layout", "./layouts/layout")

// Serve favicon
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "images", "favicon.ico"));
});

// Define routes
app.use(static);
app.use('/', homeRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});