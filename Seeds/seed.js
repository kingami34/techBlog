const sequelize = require('../config/config');

const { User, Post , Comment } = require('../models');
const userSeedData = require('./userSeedData.json');
const postBlogData = require('./postBlogData.json');
const contentData = require('./contentData.json');

// Seed the database
const seedData = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true
    });

    await Post.bulkCreate(postBlogData);

    await Comment.bulkCreate(contentData);

    process.exit(0);
};

seedData();