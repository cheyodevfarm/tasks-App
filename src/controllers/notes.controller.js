const notesCtrl = {};
const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note-form");
};

notesCtrl.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  newNote.user = req.user.id;
  await newNote.save();
  req.flash("success_msg", "Note Added successfully");
  res.redirect("/notes");
};

notesCtrl.renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id }).sort({
    createdAt: "desc",
  });
  res.render("notes/all-notes", { notes });
};

notesCtrl.renderEditForm = async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  if (note.user != req.user.id) {
    req.flash("error_msg", "You are not Authorized!.");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};
notesCtrl.updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  await Note.findByIdAndUpdate(id, { title, description });
  req.flash("success_msg", "Note Updated successfully");
  res.redirect("/notes");
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Note Deleted successfully");
  res.redirect("/notes");
};
module.exports = notesCtrl;
