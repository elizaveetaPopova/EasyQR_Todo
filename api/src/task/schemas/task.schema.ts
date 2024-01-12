import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true, default: null },
  description: { type: String, required: true, default: null },
  status: {
    type: Object,
    required: true,
    default: { status: 0, message: 'not comleted' },
  },
});
