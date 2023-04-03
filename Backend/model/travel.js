const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Travel = new Schema({
name: {
 type: String
 },
 lastname: {
 type: String
 },
 email: {
 type: String
 },
 address: {
type: String
    },
age: {
type: String
}
}, {
 collection: 'travels'
})
module.exports = mongoose.model('Travel', Travel)
