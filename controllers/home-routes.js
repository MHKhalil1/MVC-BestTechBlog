const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const sequelize = require("../config/connection");
// Get All 
router.get("/", (req, res) => {
    Post.findAll({
        attributes: ["id", "title", "content", "created_at"],
    include: [
        {
            model: Comment,
                    attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                    include: {
                        model: User,
                        attributes: ["username"]
                    }
                },

                {
                    model: User,
                    attributes: ["username"]
                }
            ]
        })

        .then(dbPostData => {
          console.log ("dog")
            const posts = dbPostData.map(post => post.get({ plain: true }));
            console.log(posts)
            res.render("homepage", { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// Get One
router.get("/post/:id", (req, res) => {
    Post.findOne({
      where: { id: req.params.id },
      attributes: ["id", "content", "title", "created_at"],
      include: [
        {
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },

        {
          model: User,
          attributes: ["username"],
        },
      ],
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          const post = dbPostData.get({ plain: true });
          console.log(post);
          res.render("single-post", { post, loggedIn: req.session.loggedIn });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;