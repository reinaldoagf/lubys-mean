const User= require('../models/user');

const userController={};

userController.getUsers = (req, res) => {
    var users = {};

    User.find({}, function (err, users) {
        res.send(users);
    });

    
}
userController.getUser = (req, res) => {
    let { id } = req.params
    let user = User.findById(id,(err, user) => {
        if (err) res.status(500).send({ message: `error in get user:${err}` })
        res.status(200).send({ message: 'user find successfully', user: user })
    });
}
userController.storeUser = (req,res)=>{
    let newUser = new User()
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    newUser.role = req.body.role;
    newUser.save((err, userStored) => {
        if (err) res.status(500).send({ message: `error in saved user:${err}` })
        res.status(200).send({ message: 'user created successfully', user: userStored })
    });
}
userController.updateUsers = (req,res)=>{
    let { id } = req.params
    let userUpdated={
        username:req.body.username,
        password:req.body.password,
        role:req.body.role
    }
    User.findByIdAndUpdate(id, { $set: userUpdated },(err, userUpdated) => {
        if(err) res.status(500).send({ message: `error in saved user:${err}` })
        res.status(200).send({ message: 'user updated successfully', userUpdated: userUpdated })
    });
}
userController.deleteUser = (req,res)=>{
    let { id } = req.params
    User.findByIdAndRemove(id, (err, userDeleted) => {
        if (err) return res.status(500).send({ message: `error in saved user:${err}` });
        return res.status(200).send({ message: "user deleted successfully",userDeleted: userDeleted});
    });
}
module.exports=userController;