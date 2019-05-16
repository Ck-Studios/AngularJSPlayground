var todos = [
  {done: true, title: 'Learn about AngularJS'},
  {done: false, title: 'Study English'},
  {done: false, title: 'Project init'}
];

function todoCtrl($scope) {
  $scope.appName = 'AngularJS Todos';
  $scope.todos = todos;
  $scope.addNewTodo = function(newTitle) {
    if (newTitle === '') {
      return;
    }
    todos.push({done: false, title: newTitle});
    $scope.newTitle = '';
  };

  $scope.archive = function() {
    for (var i = $scope.todos.length - 1; i >= 0; --i) {
      if ($scope.todos[i].done) {
        $scope.todos.splice(i,1);
      }
    }
    // var leftTodos = $scope.todos.filter(function(todo, index) {
    //   return todo.done === false;
    // });

    // 왜 filter로 하면 동작 안하는지 모르겠다...
    // $scope.todos = leftTodos
  }

  $scope.remain = function() {
    var remainCount = 0;

    angular.forEach($scope.todos, function(value, key) {
      if(value.done === false) {
        ++remainCount;
      }
    });
    return remainCount;
  }
}
