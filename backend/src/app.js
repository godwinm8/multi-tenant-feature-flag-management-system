const express = require("express");
const cors = require("cors");

const app = express();

const superAdminRoutes = require("./routes/superAdminRoutes");
const organizationRoutes = require("./routes/organizationRoutes");
const authRoutes = require("./routes/authRoutes");
const featureFlagRoutes = require("./routes/featureFlagRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/super-admin", superAdminRoutes);
app.use("/api/organizations", organizationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/feature-flags", featureFlagRoutes);

app.get("/", (req, res) => {
  res.send("Feature Flag API Running");
});

module.exports = app;
