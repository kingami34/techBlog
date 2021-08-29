
const user = require('./user');
const post = require('./post');
const comment = require('./comment');

//grouping Models
user.hasMany(Post, {
    foreignKey: 'user_id'
});

post.belongsTo(User, {
    foreignKey: 'user_id',
});

comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
  
user.hasMany(comment, {
    foreignKey: 'user_id'
});
  
post.hasMany(comment, {
    foreignKey: 'post_id'
});

module.exports = {user, post, comment};