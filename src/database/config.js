var mysql = require("mysql2");

var mySqlConfig = {
	host: process.env.DB_HOST,
	database: process.env.DB_DATABASE,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT
}

function execute(instruction, params = []) {
	
	if (process.env.NODE_ENV !== "prod" && process.env.NODE_ENV !== "dev") {
		console.log("\nO AMBIENTE (prod ou dev) NÃO FOI DEFINIDO EM .env OU .env.dev OU app.js\n");
		return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
	}

	return new Promise(function (resolve, reject) {
		var conn = mysql.createConnection(mySqlConfig);
		
		conn.connect();

		conn.query(instruction, params, function (error, results) {
			conn.end();
			
			if (error) {
				reject(error);
			}

			console.log(results);
			resolve(results);
		});

		conn.on('error', function(error){
			return ("ERRO no MySQL SERVER: ", error.sqlMessage);
		});

	});
}

module.exports = {
	execute
};