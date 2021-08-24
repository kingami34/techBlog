const sequelize = require('../config/connection');

const { User,postBlog , Comment } = require('../models');
const userSeedData = require('./userData.json');
const postBlogData = require('./blogpostData.json');
const contentData = require('./contentData.json');

// Seed the database
const seedData = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true
    });

    await postBlog.bulkCreate(postBlogData);

    await content.bulkCreate(contentData);

    process.exit(0);
};

seedData();