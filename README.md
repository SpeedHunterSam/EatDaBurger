# EatDaBurger
A burger logger with MySQL, Node, Express, Handlebars and an ORM


In this activity, I've created a burger logger with MySQL, Node, Express, Handlebars and an custom ORM. Node and MySQL to query and route data in my app, and Handlebars to generate my HTML.

Deployed Heroku Link: https://all-that-good-burger.herokuapp.com/

App File Structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│   └── orm_helpers.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
││   
├── README.md
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
