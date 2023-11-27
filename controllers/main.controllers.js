const express = require("express")
const path = require("path")


const mainControllers = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../", "views", "home.html"))
    },

    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../", "views", "login.html"))
    },
    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../", "views", "register.html"))
    },

}

module.exports = mainControllers;