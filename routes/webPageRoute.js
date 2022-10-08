const express = require("express");
const routerWeb = new express.Router();

// Get request to go to home page
routerWeb.get("/", (req, res) => {
  res.render("index");
});

// Get request for dev test
routerWeb.get("/testpage", (req, res) => {
  res.render("test");
});

routerWeb.get("/profile", (req, res) => {
  res.render("profile");
});
routerWeb.get("/exim", (req, res) => {
  res.render("client");
});
routerWeb.get("/sell", (req, res) => {
  res.render("sell");
});
routerWeb.get("/product", (req, res) => {
  res.render("product");
});
routerWeb.get("/vision", (req, res) => {
  res.render("vision");
});
routerWeb.get("/contact", (req, res) => {
  res.render("contact");
});
routerWeb.get("/register", (req, res) => {
  res.render("register");
});
routerWeb.get("/blog", (req, res) => {
  res.render("blog");
});
routerWeb.get("/reglog", (req, res) => {
  res.render("reglog");
});
routerWeb.get("/ourteam", (req, res) => {
  res.render("ourteam");
});

routerWeb.get("*", (req, res) => {
  res.status(404).render("404", { err: "page not found" });
});

module.exports = routerWeb;
