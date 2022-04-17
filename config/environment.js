const production = {

    db : process.env.SIH_DB, //here we add the db name
    db_pass : process.env.SIH_DB_PASS || '02CKuy6uO8l0jJmL',
    jwt_secret : process.env.SIH_JWT_SECRET || '12345',//using random key gen .com
    port : process.env.PORT || 8000
}  

module.exports = production;
