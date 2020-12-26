const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRouter  = require('./auth/authRouter');
const userRouter  = require('./user/userRouter');
const authenticate = require('./helpers/authenticate');
// const authRouter=require('./auth/authRouter');
app.use(bodyParser.json());


app.use("/auth",authRouter);
app.use("/users",authenticate, userRouter);

app.listen(3005, () => {
    console.log('Server Started on 3005');
});