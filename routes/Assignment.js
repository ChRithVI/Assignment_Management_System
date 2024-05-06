const express = require(id: 'express');
const assignmentRoutes = express.Router();

let Assignment = require(id: '../models/Assignment')

assignmentRoutes.route('/add').post(function(req,res){
    let assignment.save()
        .then(assignment => {
            res.stat(200).json({'assignment': 'assignment added succesfully'})
        })
        .catch( onrejected:err => {
            res.status(400).send('Unable tos save')
        })
})

assignmentRoutes.route('/').get(function(req,res){
    Assignment.find(function(err, assignment){
        if(err){
            console.log(err);
        }
        else{
            res.json(assignment);
        }
    })
});

assignmentRoutes.route('/delete/:id').get(function(req,res){
    Assignment.findByIdAndRemove({_id: req.params.id}, function(err, assignment){
        if(err) res.(err);
        else res.json('Succesfully removed');
    })
});

module.exports = assignmentRoutes;