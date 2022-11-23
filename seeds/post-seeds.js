const { Post } = require("../models");

const postData = [{
        title: "What is the word",
        content: "Bird is the word",
        user_id: 1
    },

    {
        title: "Is the word bird",
        content: "Bird is the word",
        user_id: 2
    },

    {
        title: "Bird Bird Bird",
        content: "The bird is the word",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;