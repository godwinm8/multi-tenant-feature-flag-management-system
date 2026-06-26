const FeatureFlag = require("../models/FeatureFlag");

const createFeatureFlag = async (req, res) => {
  try {
    const { organizationId, featureKey, enabled } = req.body;

    const feature = await FeatureFlag.create({
      organizationId: req.user.organizationId,
      featureKey,
      enabled,
    });

    res.status(201).json(feature);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getFeatureFlags = async (req, res) => {
  try {
    const features = await FeatureFlag.find({
      organizationId: req.user.organizationId,
    });

    res.json(features);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateFeatureFlag = async (req, res) => {
  try {
    const feature = await FeatureFlag.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!feature) {
      return res.status(404).json({
        message: "Feature not found",
      });
    }

    res.json(feature);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteFeatureFlag = async (req, res) => {
  try {
    const feature = await FeatureFlag.findByIdAndDelete(req.params.id);

    if (!feature) {
      return res.status(404).json({
        message: "Feature not found",
      });
    }

    res.json({
      message: "Feature deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const checkFeatureFlag = async (req, res) => {
  try {
    const { organizationId, featureKey } = req.body;

    const feature = await FeatureFlag.findOne({
      organizationId,
      featureKey,
    });

    res.json({
      enabled: feature ? feature.enabled : false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createFeatureFlag,
  getFeatureFlags,
  updateFeatureFlag,
  deleteFeatureFlag,
  checkFeatureFlag,
};
