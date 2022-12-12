const Users = require('../models/users.models');
const uuid = require('uuid');
const hashPassword = require('../utils/crypto').hashPassword

const findAllUsers = async () => {
    const data = await Users.findAll();
    return data
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id:id
        }
    })
    return data
}

const createUser = async (obj) => {
    const data = await Users.create({
        id: uuid.v4(),
        first_name: obj.firstName,
        last_name: obj.lastName,
        user_name: obj.userName,
        email: obj.email,
        password: hashPassword(obj.password),
        birthday: obj.birthday
    })
    return data
}

const updateUser = async (id,obj) => {
    const data = await Users.update({
        first_name: obj.firstName,
        last_name: obj.lastName,
        birthday: obj.birthday
    },{
        where: {
            id:id
        }
    })
    return data[0]
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {findAllUsers,findUserById,createUser,updateUser,deleteUser}


