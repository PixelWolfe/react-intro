const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('./pool');

console.log('In flip.router.js');

router.put('/:id', (req, res)=>{
    console.log('   IN FLIP PUT   ');
    const id = req.params.id;
    let flipStatus = req.body.newFlipStatus;
    let queryString = `UPDATE "react_gallery" SET is_flipped = $1 WHERE id = $2;`

    pool.query(queryString, [flipStatus, id])
        .then(response=>{
            res.sendStatus(201);
        })
        .catch(err=>{
            res.sendStatus(500);
        })
    })

module.exports = router;