//import {AuthService} from "../auth/authService";
const jwt = require('jsonwebtoken');
const config = require("../helpers/config");
const router = require('express').Router();
// Login
router.use("/login", (req, res)=>{
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = config.users.find((u) => {
      return u.username === username && u.password === password;
    });

    if (user) {
      // Generate an access token
      const accessToken = jwt.sign(
        { username: user.username, role: user.role,id:user.id },
        config.accessTokenSecret,
        { expiresIn: 100*60 }
      );

      res.json({
        accessToken,
      });
    } else {
      res.send("Username or password incorrect");
    }

});

module.exports = router;