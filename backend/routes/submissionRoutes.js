const express = require("express");
const constrollers = require("../controllers/submission");

const router = express.Router();
const baseURL = "/submissions";

router.get(`${baseURL}`, constrollers.getSubmissions);
router.post(`${baseURL}`, constrollers.createSubmission);
router.get(`${baseURL}/:id`, constrollers.getSubmission);
router.put(`${baseURL}/:id`, constrollers.updateSubmission);
router.delete(`${baseURL}/:id`, constrollers.updateSubmission);

module.exports = router;
