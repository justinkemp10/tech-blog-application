const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BlogpostComment extends Model {}

BlogpostComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blogpost_id: {
      type: DataTypes.INTEGER,
      // References the Blogpost model's id
      references: {
        model: "blogpost",
        key: "id",
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      // References the Comment model's id
      references: {
        model: "comment",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = BlogpostComment;
