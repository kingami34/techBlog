const User = require('./User');
const Post = require('./Post');
const comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    comment,
    Post
};