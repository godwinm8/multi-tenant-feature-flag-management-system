const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  createFeatureFlag,
  getFeatureFlags,
  updateFeatureFlag,
  deleteFeatureFlag,
  checkFeatureFlag,
} = require("../controllers/featureFlagController");

const router = express.Router();

router.post("/", protect, createFeatureFlag);

router.get("/", protect, getFeatureFlags);

router.put("/:id", protect, updateFeatureFlag);

router.delete("/:id", protect, deleteFeatureFlag);

router.post("/check", checkFeatureFlag);

module.exports = router;
