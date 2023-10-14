import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

const Mentor = mongoose.model('Mentor', mentorSchema);

export default Mentor;