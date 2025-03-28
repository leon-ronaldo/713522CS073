const asyncHandler = require("express-async-handler");
const SocialUsersData = require("../data/users.json");

// used asynchandler to handle multple request simultaneosly

const getAllUsers = asyncHandler(async (req, res) => {
    try {
        res.status(200).json({ users: SocialUsersData['users'] })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
});

const getUserById = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id
        res.status(200).json({ user: { userName: SocialUsersData['users'][id], id } })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
});

module.exports = { getAllUsers, getUserById }