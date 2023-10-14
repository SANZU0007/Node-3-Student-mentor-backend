
import express from 'express';
import Student from './studentSchema.js'; // Adjust the path as needed

const studentRouter = express.Router();

// Define student routes
studentRouter.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve students' });
  }
});
// Get a student and populate the mentor's name
studentRouter.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate('mentor', 'name'); // Populates the 'mentor' field and selects the 'name' field

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student' });
  }
});


studentRouter.post('/', async (req, res) => {
  const { name, age, mentor } = req.body;

  try {
    const student = new Student({ name, age, mentor });
    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add a student' });
  }
});

export default studentRouter;