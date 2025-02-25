const mongoose =require(id: 'mongoose');
const Schema = mongoose.Schema;

const UserScheme = new Schema({
    first_name:{
        type: String,
    },

    last_name:{
        type: String,
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = User = mongoose.model('users', UserSchema)