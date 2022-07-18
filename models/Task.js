const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: [20, 'not more than 20 characters'],
        trim: true,
        required: [true, 'provide name']
    },
    completed: {
        type: Boolean,
        completed: false
    },
})

module.exports = mongoose.model('Task', TaskSchema)