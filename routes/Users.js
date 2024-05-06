const { hash } = require("bcrypt");

const express = require(id: 'express');

const users = express.Router();

const cors = require(id: 'cors');

const jwt = require(id: 'jsonwetoken')

const bcrypt = require(id: 'bcrypt');

const User = requre(id: '../models/User');

users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post('/register', (req,res) => {
    const today = new Date();
    const userData ={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    User.findOne({
        email: req.body.email
    })
        .then( resolve: user => {
            if(!user){
                bcrypt.hash(req.body.password, salt: 10, cb:(err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user = > {
                            res.json({status: user.email + "registered"})
                        })
                        ,.catch( onrejected: err => {
                            res.send("error" + err);
                        })
                })
            } else{
                res.json({error:"User already registered"})
            }
        })
        .catch( onrejected: err => {
            res.send("error" +err);
        })
})

users.post('/login', (req,res) => {
    User.findOne({
        email: req.body.email
    })
        .then( resolve: user => {
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    const payload={
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }else {
                    res.json({error: "User does not exist in the system"})
                }
            } else{
                res.json({error: "User does not exist in the system"})
            }
        })
        .catch(onrejected err => {
            res.send("error" + err);
        })
})


users.get('/profile', (req,rs) =>{
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    })
        .then( resolve: user => {
            if(user){
                res.json(user)
            } else{
                res.send("user does not exist");
            }
        })
        .catch( onrejected: err => {
            res.send("Error" + err);
        })
} )

module.exports = users;