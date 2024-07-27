const express = require("express");
const { getAllUsers, createUser, getOneUser } = require("./controllers");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.get("/:_id", getOneUser);

module.exports = router;
