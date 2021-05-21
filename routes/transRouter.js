var express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Transactions = require("../models/Transactions");

var transrouter = express.Router();

transrouter.use(bodyParser.json());

transrouter.route("/")
.get((req,res,next) => {
    Transactions.find({})
    .then((trans) => {
      res.statusCode =200;
      res.setHeader("Content-Type","application/json");
      res.json(trans);
    },(err) => next(err))
    .catch((err) => next(err));
})
.post((req,res,next) => {
    Transactions.create(req.body)
    .then((trans)=> {
      console.log("Transaction Created",trans);
  
      res.statusCode =200;
      res.setHeader("Content-Type","application/json");
      res.json(trans);
    },(err) => next(err))
    .catch((err) => next(err));
});

transrouter.route("/:Id")
.get((req,res,next) => {
  Transactions.findById(req.params.Id)
  .then((trans) => {
      res.statusCode =200;
      res.setHeader("Content-Type","application/json");
      res.json(trans);
  },(err) => next(err))
  .catch((err) => next(err));
})
.put((req,res,next) => {
  Transactions.findByIdAndUpdate(req.params.Id,{$set : req.body},{new : true})
  .then((user) => {

      res.statusCode =200;
      res.setHeader("Content-Type","application/json");
      res.json(user);
  },(err) => next(err))
  .catch((err) => next(err));
});

module.exports = transrouter;