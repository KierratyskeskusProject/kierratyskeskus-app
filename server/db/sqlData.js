const products = `
CREATE TABLE IF NOT EXISTS products(
id INTEGER PRIMARY KEY AUTOINCREMENT,
title VARCHAR(30),
description VARCHAR(255),
conditionVal VARCHAR(50),
price VARCHAR(30),
categories VARCHAR(200),
weight VARCHAR(30)
);
`;

const categories = `
CREATE TABLE IF NOT EXISTS categories(
cat_id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(15)
);
`;

const subCategories = `
CREATE TABLE IF NOT EXISTS subCategories(
sub_id INTEGER PRIMARY KEY AUTOINCREMENT,
sub_name VARCHAR(15),
cat_fk INTEGER NOT NULL
);
`;

const templates = `
CREATE TABLE IF NOT EXISTS templates(
temp_id INTEGER PRIMARY KEY AUTOINCREMENT,
content TEXT,
cat_fk INTEGER NOT NULL
);
`;

const insertCategories = `
INSERT INTO categories (name) VALUES
("Kitchenware"),("Bikes"),("Electronics"),("Books"),("Toys");
`;

const insertSubCategories = `
INSERT INTO subCategories (sub_name, cat_fk) VALUES
("Glasses",1),("Plates",1),("Cups",1),("Forks",1),("Knifes",1),
("Male",2),("Female",2),("Boy",2),("Girl",2),("Transportation",2),("Vintage", 2),
("Phones",3),("Labtops",3),("Chargers",3),
("Novels",4),("Romans",4),("Cartoons",4),("Romantics",4),("Horror",4),
("Boys",5),("Girls",4),("Unisex",4),("Electronic",4),("mechanic",4);
`;

const insertTemplates = `
INSERT INTO templates (content, cat_fk) VALUES
("<p>Title:</p> <p>Description:</p>", 4),
("<p>Size:</p> <i>pages</i>")
("<p>Style:</p> <strong>Size:</strong>", 5);
`;


module.exports = {
  products,
  categories,
  subCategories,
  templates,
  insertCategories,
  insertSubCategories,
  insertTemplates,
};
