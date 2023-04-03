const express = require('express');
const app = express();
const travelRoute = express.Router();
let Travel = require('../model/Travel');
// 1. Add Book
travelRoute.route('/infohome').post((req, res, next) => {
Travel.create(req.body, (error, data) => {
 if (error) {
 return next(error)
 } else {
 res.json(data)
 }
 })
});
// 2. Get all Book
travelRoute.route('/').get((req, res) => {
 Travel.find((error, data) => {
 if (error) {
 return next(error)
 } else {
 res.json(data)
 }
 })
})
// 3. Get Book
travelRoute.route('/read-travel/:id').get((req, res) => {
 Travel.findById(req.params.id, (error, data) => {
 if (error) {
 return next(error)
 } else {
 res.json(data)
 }
 })
})
// 4. Update Book
travelRoute.route('/update-travel/:id').put((req, res, next) => {
 Travel.findByIdAndUpdate(req.params.id, {
 $set: req.body
 }, (error, data) => {
 if (error) {
 return next(error);
 console.log(error)
 } else {
 res.json(data)
 console.log('Travel updated successfully!')
 }
 })
})
// 5. Delete Book
travelRoute.route('/delete-travel/:id').delete((req, res, next) => {
 Travel.findByIdAndRemove(req.params.id, (error, data) => {
 if (error) {
 return next(error);
 } else {
 res.status(200).json({
 msg: data
 })
 }
 })
})
module.exports = travelRoute;
