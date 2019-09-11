const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {type: String, required: [true, "Must add a name"], minlength: [3, "Name must be atleast 3 characters"]},
    email: {type: String, required: [true, "Must add an email"], minlength: [3, "Email must be atleast 3 characters"]},
    comment: {type: String},
}, { timestamps: true });

mongoose.model('User', UserSchema);
