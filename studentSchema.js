// studentSchema.js
import mongoose from 'mongoose';


const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor',
    
  },
  // Add other fields as needed
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
