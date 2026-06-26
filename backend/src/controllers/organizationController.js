const Organization = require("../models/Organization");

const createOrganization = async (req, res) => {
  try {
    const { name } = req.body;

    const existingOrganization = await Organization.findOne({ name });

    if (existingOrganization) {
      return res.status(400).json({
        message: "Organization already exists",
      });
    }

    const organization = await Organization.create({
      name,
    });

    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();

    res.status(200).json(organizations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createOrganization,
  getOrganizations,
};
