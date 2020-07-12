const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

console.log('In flip.router.js');

router.put('/:id', (req, res)=>{
    console.log('In flip put');
    const id = req.params.id;
    for (galleryItem of galleryItems){
        console.log('Checking!');
        if(galleryItem.id === Number(id)){
            console.log('Old flip status:', galleryItem.isFlipped);
            galleryItem.isFlipped = !galleryItem.isFlipped;
            console.log('New flip status:', galleryItem.isFlipped);
        }
    }
    res.sendStatus(200);
    })

module.exports = router;