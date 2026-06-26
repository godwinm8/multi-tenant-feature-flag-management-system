const express = require("express");

const {
  createOrganization,
  getOrganizations,
} = require("../controllers/organizationController");

const router = express.Router();

router.post("/", createOrganization);

router.get("/", getOrganizations);

module.exports = router;
