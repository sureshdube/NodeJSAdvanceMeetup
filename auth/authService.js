const users = [
  {
    username: "sureshdube",
    password: "12345678", // Plain text password is not recommended.
    role: "admin",
  },
  {
    username: "anujkumar",
    password: "12345678", // Plain text password is not recommended.
    role: "teammember",
  },
];
export class AuthService {
  login(req, res) {
    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find((u) => {
      return u.username === username && u.password === password;
    });

    if (user) {
      // Generate an access token
      const accessToken = jwt.sign(
        { username: user.username, role: user.role },
        accessTokenSecret
      );

      res.json({
        accessToken,
      });
    } else {
      res.send("Username or password incorrect");
    }
  }
}
