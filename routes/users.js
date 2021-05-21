var express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Users = require("../models/Users");
const Transactions = require("../models/Transactions");

var Userrouter = express.Router();

Userrouter.use(bodyParser.json());

Userrouter.route("/")
.get((req, res, next) => {
  Users.find({})
  .then((user) => {
    res.statusCode =200;
    res.setHeader("Content-Type","application/json");
    res.json(user);
  },(err) => next(err))
  .catch((err) => next(err));
})
.post((req,res,next) => {
  Users.create(req.body)
  .then((user)=> {
    console.log("User Created",user);

    res.statusCode =200;
    res.setHeader("Content-Type","application/json");
    res.json(user);
  },(err) => next(err))
  .catch((err) => next(err));
});

Userrouter.route("/:receiverId")
.get((req,res,next) => {
  Users.findById(req.params.receiverId)
  .then((dishes) => {
      res.statusCode =200;
      res.setHeader("Content-Type","application/json");
      res.json(dishes);
  },(err) => next(err))
  .catch((err) => next(err));
})
.put((req,res,next) => {
  Users.findByIdAndUpdate(req.params.receiverId,{$set : req.body},{new : true})
  .then((user) => {

      res.statusCode =200;
      res.setHeader("Content-Type","application/json");
      res.json(user);
  },(err) => next(err))
  .catch((err) => next(err));
})


module.exports = Userrouter;
