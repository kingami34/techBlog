const router = require("express").Router();
const { Post, comment, User } = require("../models/");

// get all posts for homepage
router.get("/", (req, res) => {
    Post.findAll({
            include: [User],
        })
        .then((dbPostData) => {
            const posts = dbPostData.map((post) => post.get({ plain: true }));

            res.render("all-posts", { posts });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// get single post
router.get("/post/:id", (req, res) => {
    Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: comment,
                    include: [User],
                },
            ],
        })
        .then((dbPostData) => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });

                res.render("single-post", { post });
            } else {
                res.status(404).end();
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("signup");
});

router.get("/logout", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/logout");
        return;
    }

    res.render("logout");
});

module.exports = router;