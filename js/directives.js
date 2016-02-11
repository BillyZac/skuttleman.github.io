app.directive('personalHeader', function() {
  return {
    restrict: 'AE',
    templateUrl: '/templates/header.html',
    controller: ['$scope', 'loadJSON', function($scope, loadJSON) {
      loadJSON.load('header').then(function(json) {
        $scope.navs = json.data.data;
      });
    }]
  };
});
