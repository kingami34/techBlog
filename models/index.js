
const User = require('./User');
const post = require('./post');
const comment = require('./comment');

//grouping Models
User.hasMany(post, {
    foreignKey: 'user_id'
});

post.belongsTo(User, {
    foreignKey: 'user_id',
});

comment.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
comment.belongsTo(post, {
    foreignKey: 'post_id'
});
  
User.hasMany(comment, {
    foreignKey: 'user_id'
});
  
post.hasMany(comment, {
    foreignKey: 'post_id'
});

module.exports = {User, post, comment};