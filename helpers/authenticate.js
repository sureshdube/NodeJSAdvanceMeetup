const jwt = require('jsonwebtoken');
const config = require("./config");
// Verify JWT Token
const authenticate = (req, res, next) => {
    const authToken = req.query["accessToken"];
    if (authToken) {
        jwt.verify(authToken, config.accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            // Set user in request
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticate;