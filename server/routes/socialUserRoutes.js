const express = require("express");
const router = express.Router();
const {
    getAllUsers,
    getUserById
} = require("../controllers/socialUsersController");

router.get("/", getAllUsers).get("/:id", getUserById)

module.exports = router;