// public/core.js
var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.todos  = [];

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {


        console.log("*********************")

        console.log($scope.formData)

        var example = {
            txt : $scope.formData
        }
        
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos.push(data) ;
                console.log(data);


            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        console.log("delete "+id);
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos.splice($scope.todos.indexOf(data),1);
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}