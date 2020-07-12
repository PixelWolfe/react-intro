const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('./pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {

    let id = req.params.id
    let userLiked = req.body.newUserLiked;
    let likedQueryString = `UPDATE "react_gallery" SET user_liked = $1 WHERE id = $2;`;
    let totalLikesQueryString = `UPDATE "react_gallery" SET likes = $1 WHERE id = $2;`;
    let likeUpdate = null;

    if(userLiked === true){
        likeUpdate = (Number(req.body.totalLikes) + 1)
    } else if (userLiked === false){
        likeUpdate = (Number(req.body.totalLikes) - 1)
    }
    pool.query(likedQueryString, [userLiked, id])
        .then(response=>{
            console.log('UserLiked response:', response);
            res.sendStatus(201);

            pool.query(totalLikesQueryString, [likeUpdate, id])
             .then(response=>{
                console.log('updateLikes response:', response);
                res.sendStatus(201);
             })
             .catch(err=>{
                console.log('updateLikes error:', err);
                res.sendStatus(500); 
             })

        })
        .catch(err=>{
            console.log('UserLiked error:', err);
            res.sendStatus(500);
        })

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {

    let queryString = `SELECT * FROM "react_gallery" ORDER BY id ASC;`
    pool.query(queryString)
        .then(response=>{
            console.log('Get response:',response);
            console.log('Sent to client:',response.rows);
            res.send(response.rows);
        })
        .catch(err=>{
            console.log('Error getting image information:', err);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;