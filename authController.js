const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const authController = {
    signup: (req, res) => {
     const input = {
        "nome": "string",
        "email": "string",
        "senha":"senha"
     }

    },
    signin: (req, res) => {
        const output = {

            "email": "string",
            "senha":"senha"
         }
    },
    getUser: (req, res) => {
        const input = {
            "nome": "string",
            "email": "string",
            "senha":"senha"
         }
    },
};

module.exports = authController;