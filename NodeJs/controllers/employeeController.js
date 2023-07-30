const express = require('express');
let objectId = require('mongoose').Types.objectId;

const router = express.Router();

const { Employee } = require('../models/employee');

router.get('/', (req, res, next) => {
    Employee.find()
        .exec()
        .then(doc => res.send(doc))
        .catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
    const emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp
        .save()
        .then(doc => res.send(doc))
        .catch(err => console.log(err));
});

router.get('/:Id', (req, res, next) => {
    const id = req.params.Id;
    console.log(id)
    Employee.findById(id)
        .exec()
        .then(doc => { if (doc) res.send(doc); })
        .catch(err => console.log(err));
});

router.put('/:Id', (req, res, next) => {
    const id = req.params.Id;
    let emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    Employee.updateOne({ _id: id }, { $set: emp })
        .exec()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(err => {
            err.status(500).send(err);
        });
});

router.delete('/:Id', (req, res, next) => {
    const id = req.params.Id;
    Employee.deleteOne({ _id: id })
        .exec()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(err => {
            err.status(500).send(err);
        });
});
module.exports = router;