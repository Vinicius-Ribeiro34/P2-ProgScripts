const Sequelize = require("sequelize");
const Category = require("../categories/Category");
const connection = require("../database/database");


const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})


Category.hasMany(Article); // UMA Categoria tem muitos artigos
Article.belongsTo(Category);// UM Artigo pertence a uma categoria

Article.sync({force:true});

module.exports = Article;