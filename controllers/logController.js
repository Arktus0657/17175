const Log = require("../models/Log");

exports.createLog = async (req, res) => {
  try {
    const log = new Log(req.body);
    await log.save();
    res.status(201).json({ success: true, data: log });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ 
        timestamp: -1 
    });
    res.json({
        success: true, data: logs
    });
  } catch (error) {
    res.status(500).json({ 
        success: false, error: error.message 
    });
  }
};
