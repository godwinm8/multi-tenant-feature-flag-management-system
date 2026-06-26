const generateToken = require("../utils/generateToken");

const login = (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  if (email === "admin@byepo.com" && password === "admin123") {
    return res.json({
      message: "Login successful",
      token: generateToken("super-admin", "SUPER_ADMIN"),
    });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
};

module.exports = { login };
