app.controller('HomeController', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.view = 'home';
    $rootScope.backgroundImage = '/images/snow.jpg';

  }
]);

app.controller('AboutController', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.view = 'about';
    $rootScope.backgroundImage = '/images/hiking.jpg';

  }
]);

app.controller('PortfolioController', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.view = 'portfolio';
    $rootScope.backgroundImage = '/images/portfolio.jpg';

  }
]);

app.controller('MusicController', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.view = 'music';
    $rootScope.backgroundImage = '/images/music.jpg';

  }
]);

app.controller('LinksController', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.view = 'links';
    $rootScope.backgroundImage = '/images/climbing.jpg';

  }
]);
