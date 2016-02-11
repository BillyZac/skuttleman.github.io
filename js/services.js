app.service('loadJSON', ['$http', function($http) {
  return {
    load: function(name) {
      return $http.get(['/json/', name, '.json'].join(''));
    }
  };
}]);
