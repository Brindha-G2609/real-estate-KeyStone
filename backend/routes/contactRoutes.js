import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST route - to save contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("❌ Error saving message:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
