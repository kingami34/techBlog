
const User = require('./User');
const post = require('./post');
const Comment = require('./comment');

//grouping Models
User.hasMany(post, {
    foreignKey: 'User_id'
});

post.belongsTo(User, {
    foreignKey: 'User_id',
});

Comment.belongsTo(User, {
    foreignKey: 'User_id'
  });
  
Comment.belongsTo(post, {
    foreignKey: 'post_id'
});
  
User.hasMany(Comment, {
    foreignKey: 'User_id'
});
  
post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {User, post, Comment};