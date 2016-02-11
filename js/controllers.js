app.controller('HomeController', [
  '$scope', '$rootScope', 'loadJSON', function($scope, $rootScope, loadJSON) {
    $rootScope.view = 'home';
    $rootScope.backgroundImage = '/images/snow.jpg';
  }
]);

app.controller('BioController', [
  '$scope', '$rootScope', 'loadJSON', function($scope, $rootScope, loadJSON) {
    $rootScope.view = 'bio';
    $rootScope.backgroundImage = '/images/hiking.jpg';

  }
]);

app.controller('PortfolioController', [
  '$scope', '$rootScope', 'loadJSON', function($scope, $rootScope, loadJSON) {
    $rootScope.view = 'portfolio';
    $rootScope.backgroundImage = '/images/portfolio.jpg';
    loadJSON.load('portfolio').then(function(json) {
      console.log(json);
      $scope.projects = json.data.data;
    });
  }
]);

app.controller('MusicController', [
  '$scope', '$rootScope', 'loadJSON', function($scope, $rootScope, loadJSON) {
    $rootScope.view = 'music';
    $rootScope.backgroundImage = '/images/music.jpg';

  }
]);

app.controller('LinksController', [
  '$scope', '$rootScope', 'loadJSON', function($scope, $rootScope, loadJSON) {
    $rootScope.view = 'links';
    $rootScope.backgroundImage = '/images/climbing.jpg';

  }
]);
