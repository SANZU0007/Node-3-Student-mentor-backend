
// mentorRoutes.js
import express from 'express';
import Mentor from './mentorSchema.js'; // Adjust the path as needed

const mentorRouter = express.Router();

// Define mentor routes
mentorRouter.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve mentors' });
  }
});

mentorRouter.post('/', async (req, res) => {
  const { name, expertise } = req.body;

  try {
    const mentor = new Mentor({ name, expertise });
    await mentor.save();
    res.json(mentor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add a mentor' });
  }
});

export default mentorRouter;