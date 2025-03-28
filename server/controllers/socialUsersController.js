const asyncHandler = require("express-async-handler");
const SocialUserModel = require("../models/SocialUserModel");

// used asynchandler to handle multple request simultaneosly

const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const allUsers = await SocialUserModel.find({});
        res.status(200).json({ users: allUsers })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error })
    }
});