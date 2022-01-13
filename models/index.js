const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');
const BlogpostComment = require('./BlogpostComment');

User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Blogpost.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsToMany(Blogpost, {
    through: BlogpostComment,
    foreignKey: 'blogpost_id',
});

Blogpost.belongsToMany(Comment, {
    through: BlogpostComment,
    foreignKey: 'comment_id',
});

module.exports = { User, Blogpost };
