var app = angular.module("myApp", []);
app.controller('myCtrl', ['$scope', function($scope) {
    $scope.todos = [{ text: 'Learn angularjs', done: false }, { text: 'Build an app', done: false }];
    $scope.addTodo = function() {
        $scope.todos.push({ text: $scope.formTodoText, done: false });
        $scope.formTodoText = '';
    }
    $scope.getTotalTodos = function() {
        return $scope.todos.length;
    };
    $scope.clearCompleted = function() {
        $scope.todos = _.filter($scope.todos, function(todo) {
            return !todo.done;
        })
    };
}]);