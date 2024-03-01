const express = require("express");
const UserType = require("../models/UserType");
const router = express.Router();

router.post("/createUserType", async function (req, res) {
    try {
      const newUserType = new UserType(req.body);
      await newUserType.save();
      res.send('User Type Created Successfully')
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.get("/getUserTypes", async (req, res) => {
    try {
      const userTypes = await UserType.find();
      res.send(userTypes);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  


module.exports = router;