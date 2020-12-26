const Roles = {
    ADMIN:"admin",
    TEAMMEMBER : "teammember"
}
const users = [
  {
    id: 1,
    username: "sureshdube",
    password: "12345678",
    role: Roles.ADMIN,
  },
  {
    id: 2,
    username: "anujkumar",
    password: "12345678",
    role: Roles.TEAMMEMBER,
  },
];


module.exports = {
  accessTokenSecret: "this is your secret key",
  users,
  roles:Roles
};
