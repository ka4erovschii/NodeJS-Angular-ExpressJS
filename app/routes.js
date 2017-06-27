    var Example      = require('./models/example');       

    module.exports =  function(app){

   	// get all todos
	    app.get('/api/todos', function(req, res) {

	    	Example.findAll().then(example => {
		  console.log(example);

	              res.json(example); // return all todos in JSON format
		});
	    });


	     // get all todos
	    app.get('/api/todos/:id', function(req, res) {

	    	Example.findById(req.params.id).then(example => {
		  console.log(example);

	              res.json(example); // return all todos in JSON format
		});
	    });



	    // create todo and send back all todos after creation
	    app.post('/api/todos', function(req, res) {

		Example.create( { 
	            id : req.body.id,
	            txt :  req.body.txt
	          }).then(example => {
		  console.log(example);

	              res.json(example); // return all todos in JSON format
		});

	    });

	    // delete a todo
	    app.delete('/api/todos/:id', function(req, res) {


		Example.destroy( { where: { id: [req.params.id] }} ).then(example => {
		  console.log(example);

	              res.json(example); // return all todos in JSON format
		});
	    });




	    app.get('*', function(req, res) {
	        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	    });

    }