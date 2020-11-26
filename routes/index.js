var express = require("express");
var router = express.Router();
var db = require("../db");

/* GET home page. */
router.get("/", function (req, res, next) {
  let wishes = db.getAll();
  res.render("index", { title: "Ich wünsche mir...", wishes });
});

router.get("/wish", function (req, res, next) {
  let result = db.get(req.query.name);
  res.render("wish", {
    name: result.friendlyName,
    wish: result.wish,
  });
});

router.post("/new", function (req, res, next) {
  db.write(req.body.name, req.body.wish);
  res.render("new", { wish: req.body.wish, name: req.body.name });
});

router.get("/delete", function (req, res, next) {
  let wishes = db.getAll();
  res.render("delete", { wishes });
});

router.post("/remove", function (req, res, next) {
  let result = db.get(req.body.name);
  db.remove(req.body.name);
  res.render("removed", { name: result.friendlyName });
});

module.exports = router;
