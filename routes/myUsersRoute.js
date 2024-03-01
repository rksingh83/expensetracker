const express = require("express");
const MyUsers = require("../models/MyUsers");
const router = express.Router();

router.post("/createMyUser", async function (req, res) {
    try {
      const myUser = new MyUsers(req.body);
      await myUser.save();
      res.send('User  Created Successfully')
    } catch (error) {
      res.status(500).json(error);
    }
  });

  router.get("/getMyUsers", async (req, res) => {
    try {
      const myUsers = await MyUsers.find();
      res.send(myUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  });
  


module.exports = router;