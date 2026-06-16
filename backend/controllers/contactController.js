const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

const createContact = async (req, res) => {
  try {
    const { name, email, business, message } = req.body;

    // Save to MongoDB
    const contact = await Contact.create({
      name,
      email,
      business,
      message,
    });

    // Email Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "🚀 New Lead - Zenova Tech",
      html: `
        <h2>New Lead Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Message:</strong> ${message}</p>

        <hr />

        <p>This lead was submitted through the Zenova Tech website.</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      contact,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
};