import express from 'express';
import Group from '../models/Group.js';

const router = express.Router();

// Get all groups
router.get('/', async (req, res) => {
    const groups = await Group.find();
    res.json(groups);
});

// Add new group
router.post('/', async (req, res) => {
    const { name, category, link } = req.body;
    const newGroup = new Group({ name, category, link });
    await newGroup.save();
    res.status(201).json(newGroup);
});

export default router;
