
const User = require('./User');
const post = require('./post');
const comment = require('./comment');

//grouping Models
User.hasMany(post, {
    foreignKey: 'User_id'
});

post.belongsTo(User, {
    foreignKey: 'User_id',
});

comment.belongsTo(User, {
    foreignKey: 'User_id'
  });
  
comment.belongsTo(post, {
    foreignKey: 'post_id'
});
  
User.hasMany(comment, {
    foreignKey: 'User_id'
});
  
post.hasMany(comment, {
    foreignKey: 'post_id'
});

module.exports = {User, post, comment};