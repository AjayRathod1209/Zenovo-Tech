const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, business, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      business,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      contact,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
};