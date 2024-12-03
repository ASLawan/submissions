const { Entry } = require("../models");
const { WebSocketServer } = require("ws");

// Websocket instance
const wss = new WebSocketServer({ port: 5001 });

wss.on("connection", (ws) => {
  console.log("Client Connected!");
});

// routes
//create a new entry
const createSubmission = async (req, res) => {
  try {
    const { name, email, dateOfBirth, department, comments } = req.body;

    if (!name || !email || !dateOfBirth || !department) {
      res.status(400).json({ Error: "All fields are required" });
    }

    const entry = await Entry.create({
      name,
      email,
      dateOfBirth,
      department,
      comments,
    });

    //Notiffy all websocket clients
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(JSON.stringify(entry));
      }
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all entries
const getSubmissions = async (req, res) => {
  try {
    const entries = await Entry.findAll();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get one entry
const getSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Entry.findByPk(id);

    if (!entry) {
      res.status(404).json({ message: "Submission not found!" });
    }

    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update entry
const updateSubmission = async (req, res) => {
  try {
    const id = req.params;
    const { name, email, dateOfBirth, department, comments } = req.body;
    const entry = await Entry.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found!" });
    }

    await entry.update({ name, email, dateOfBirth, department, comments });

    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete entry
const deleteSubmission = async (req, res) => {
  try {
    const { id } = req.params;

    const entry = await Entry.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found!" });
    }

    await entry.destroy();
    res.status(200).json({ message: "Successfully deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSubmission,
  getSubmission,
  getSubmissions,
  updateSubmission,
  deleteSubmission,
};
