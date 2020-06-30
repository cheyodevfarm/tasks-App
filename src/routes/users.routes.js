const { Router } = require("express");
const router = Router();
const {
  renderSignUpForm,
  signup,
  renderSignInForm,
  signin,
  logout,
} = require("../controllers/users.controller");

//get User Form
router.get("/users/signup", renderSignUpForm);

//POST new User
router.post("/users/signup", signup);

router.get("/users/signin", renderSignInForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router;
