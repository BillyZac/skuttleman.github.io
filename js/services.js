app.service('loadJSON', ['$http', function($http) {
  return {
    load: function(name) {
      return $http.get(['/public/json/', name, '.json'].join(''));
    }
  };
}]);
