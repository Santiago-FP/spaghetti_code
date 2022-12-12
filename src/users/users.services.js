const {findAllUsers,findUserById,createUser,updateUser,deleteUser} = require('./users.controllers')


const getAllUsers = (req,res) => {
    findAllUsers()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
};

const getUserById = (req,res) => {
    const id = req.params.id
    findUserById(id)
    .then((data) => {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({message: "Id not found"})
        }
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
};

const postUser = (req,res) => {
    const {firstName,lastName,userName,email,password,birthday} = req.body

    createUser({firstName,lastName,userName,email,password,birthday})
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(400).json({message:err.message})
    })
};

const patchUser = (req,res) => {
    const id = req.params.id
    const {firstName,lastName,birthday} = req.body
    
    updateUser(id,{firstName,lastName,birthday})
    .then(data => {
        if(data){
            res.status(200).json({message: "User updated"})
        }else{
            res.status(404).json({message: "Id not found"})
        }
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
};

const removeUser = (req,res) => {
    const id = req.params.id
    deleteUser(id)
    .then(data => {
        if(data){
            res.status(204).json()
        }else{
            res.status(404).json({message: "Id not found"})
        }
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
};


module.exports = {getAllUsers,getUserById,postUser,patchUser,removeUser}