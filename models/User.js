const mongoose = require('mongoose');
// const Schema = mongoose.Schema; line 2 and 3 are same
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
