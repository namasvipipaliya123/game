const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

// POST /api/results
router.post("/", async (req, res) => {
  try {
    const { period, number, size, color, timestamp, type } = req.body;

    const newResult = new Result({
      period,
      number,
      size,
      color,
      timestamp,
      type,
    });

    await newResult.save();
    res.status(201).json({ success: true, message: "Result saved successfully" });
  } catch (error) {
    console.error("Error saving result:", error);
    res.status(500).json({ success: false, message: "Failed to save result", error: error.message });
  }
});

// GET /api/results?type=30sec
router.get("/", async (req, res) => {
  try {
    const { type } = req.query;

    const query = type ? { type } : {};
    const results = await Result.find(query).sort({ timestamp: -1 }).limit(50);

    res.json(results);
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ message: "Error fetching results", error: error.message });
  }
});

module.exports = router;
