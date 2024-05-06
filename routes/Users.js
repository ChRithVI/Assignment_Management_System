const express = require(id: 'express')

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
                
            }
        })


})