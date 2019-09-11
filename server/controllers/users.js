const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    allUsers: (req, res) => {
        User.find({}, (err, users) =>{
            if(err){
                res.json(err);
            }else{
                res.json(users);
            }
        })
    },
    addUser: (req,res) =>{
        User.create(req.body, (err, user)=>{
            if(err){
                res.json(err);
            }else {
                res.json(user);
            }
        })
    },
    deleteUser: (req, res) =>{
        User.findByIdAndRemove({_id: req.params.id}, (err, user) =>{
            if(err){
                res.json(err);
            }else {
                res.json(user);
            }
        })
    },
}
