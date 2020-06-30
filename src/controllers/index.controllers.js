const indexCtrl = {};

indexCtrl.indexHome = (req, res) => {
  res.render("index");
};

indexCtrl.indexAbout = (req, res) => {
  res.render("about");
};

module.exports = indexCtrl;
