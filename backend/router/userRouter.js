// All route
const express = require("express");
const {
  home,
  createUser,
  getUser,
  editUser,
  deleteUser,
  searchUser
} = require("../controller/userControllers");
const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.put("/editUser/:id", editUser);
router.get("/searchUser/:id", searchUser)
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
