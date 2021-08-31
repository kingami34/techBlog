const sequelize = require('../config/connection');

const { User, post , Comment } = require('../models');
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

    await post.bulkCreate(postBlogData);

    await Comment.bulkCreate(contentData);

    process.exit(0);
};

seedData();