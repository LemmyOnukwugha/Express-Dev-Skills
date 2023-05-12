const Skills = require("../models/skills");

function index(req, res) {
  res.render("index", { allSkills: Skills.skills });
}

function newSkill(req, res) {
  res.render("new.ejs", {});
}

function create(req, res) {
  //I want to pass request.body not one by one
  console.log(req.body);
  const skill = { name: req.body.name, des: req.body.des };
  Skills.create(skill);
  res.redirect("/");
}

function edit(req, res) {
  res.render("edit.ejs", {
    selectSkill: Skills.selectedSkill(req.params.id),
  });
}

function update(req, res) {
  Skills.update(req.params.id, req.body);
  res.redirect("/");
}

function show(req, res) {
  res.render("show.ejs", {
    selectSkill: Skills.selectedSkill(req.params.id),
  });
}

function deleteSkill(req, res) {
  console.log("delete");
  Skills.deleteSkill(req.param.id);
  res.redirect("/");
}

module.exports = {
  index,
  new: newSkill,
  create,
  edit,
  update,
  show,
  delete: deleteSkill,
};
