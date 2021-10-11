const router = require("express").Router();
const { comment } = require('../../models');
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
    comment.create({...req.body, userId: req.session.userId })
        .then(newComment => {
            res.json(newComment);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;