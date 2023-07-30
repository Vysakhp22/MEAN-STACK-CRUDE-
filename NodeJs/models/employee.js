const mongoose = require("mongoose");

var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number }
});  //here we can pass the third paramete to create collection

module.exports = { Employee };