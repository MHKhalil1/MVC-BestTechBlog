const { User } = require("../models");

const userData = [{
        username: "bird1",
        password: "bird2"

    },

    {
        username: "bird3",
        password: "bird4"
    },

    {
        username: "bird5",
        password: "bird6"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;