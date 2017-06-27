var Sequelize      = require('sequelize');      
var database       = require('./database'); 

module.exports = {

 sequelize:new Sequelize(database.database,  database.user, database.password, {
		host: database.host,
	  	dialect: 'mysql',
	  

		pool: {
		    max: 5,
		    min: 0,
		    idle: 10000
		},

		define: {
		        timestamps: false
		}

	  	// SQLite only
	  	//storage: 'path/to/database.sqlite'
	})

}
