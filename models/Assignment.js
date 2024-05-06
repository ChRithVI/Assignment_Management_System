const mongoose =require(id: 'mongoose');
const Schema = mongoose.Schema;

let Assignment = new Schema({
    course:{
        type: String
    },

    assignment_name:{
        type: String
    },

    deadline:{
        type:String
    }, {
        Collection: 'assignment'
    }
});
module.exports = mongoose.model(name:'Assignment', Assignment);