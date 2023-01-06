# Project Document
--------------------------------------------------------
## Front End
I Developed the front end project using React Js.
### Link of Project in Production
https://kuantokusta.walacerodrigues.com/

### Install Dependencies
`yarn install` or use `make install` for change .env and remove node_modules

### Run Project
`yarn start` or use `make start` for change .env 

### Build Generate
`yarn run build` or use `make build-prod` for change .env and create build
Builds the app for production to the `build` folder

## BACK END
I Developed the Back End project using Node Js and MySql.

### Routes
API_URL = https://zap-plus-api.herokuapp.com
  Product List | GET | `/kuantoKusta/product/list`
    Params: rowsPerPage (int), page (int)
  Product Especific | GET | `/kuantoKusta/product/especific`
    Params: id (int)
### DB
  Sql for DB ./src/assets/sql/port5718_KuantoKusta.sql