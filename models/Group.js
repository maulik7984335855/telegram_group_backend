import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    link: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Group', GroupSchema);
