const router = require('express').Router();
const config = require("../helpers/config");
const authorize = require('../helpers/authorize');
router.get("/", authorize([config.roles.ADMIN]), (req, res)=>{
    res.json({
      users:config.users
      });
});

router.get("/:id",authorize(), (req, res)=>{
    const currentUser = req.user;
    console.log("CurrentUser",currentUser)
    const id = parseInt(req.params.id);
        // only allow admins to access other user records
        if (id !== currentUser.id && currentUser.role !== config.roles.ADMIN) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    res.json(config.users.find(u=> u.id === id));
}); 

module.exports = router;