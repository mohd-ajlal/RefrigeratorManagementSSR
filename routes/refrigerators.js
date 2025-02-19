const express = require("express");
const router = express.Router();
const Refrigerator = require("../models/refrigerator");


router.get("/", async (req, res) => {
  const refrigerators = await Refrigerator.find();
  res.render("index", { refrigerators });
});


router.get("/new", (req, res) => {
  res.render("new");
});


router.post("/", async (req, res) => {
  await Refrigerator.create(req.body);
  res.redirect("/phones");
});


router.get("/:id", async (req, res) => {
  const refrigerator = await Refrigerator.findById(req.params.id);
  res.render("show", { refrigerator });
});

router.get("/:id/edit", async (req, res) => {
  const refrigerator = await Refrigerator.findById(req.params.id);
  res.render("edit", { refrigerator });
});


router.put("/:id", async (req, res) => {
  await Refrigerator.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/phones/${req.params.id}`);
});


router.delete("/:id", async (req, res) => {
  await Refrigerator.findByIdAndDelete(req.params.id);
  res.redirect("/phones");
});

module.exports = router;
