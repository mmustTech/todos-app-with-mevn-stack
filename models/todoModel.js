const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const todoSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The todo must have a title.']
  },
  done: {
    type: Boolean,
    default: false
  }
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  //   // select: false
  // }
},{
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;