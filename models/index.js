
const User = require('./User');
const Post = require('./post');
const Comment = require('./comment');

//grouping Models
User.hasMany(Post, {
    foreignKey: 'User_id'
});

Post.belongsTo(User, {
    foreignKey: 'User_id',
});

Comment.belongsTo(User, {
    foreignKey: 'User_id'
  });
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
User.hasMany(Comment, {
    foreignKey: 'User_id'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {User, Post, Comment};