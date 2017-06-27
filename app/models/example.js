    var persistence = require('./../../config/persistence');       

    module.exports = persistence.sequelize.define('Example', {
	  id: {
	     type:String,
	     unique: true,
	     allowNull: false,
	     primaryKey: true,
	     autoIncrement: true
	  },
	  txt: {
	    type: String
	  }
	});