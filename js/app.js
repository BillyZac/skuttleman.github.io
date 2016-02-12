var app = angular.module('personal-page', ['ngRoute', 'mm.foundation']);
app.config(['$routeProvider', function(route) {
  route.when('/', {
    templateUrl: '/templates/home.html',
    controller: 'HomeController'
  }).when('/bio', {
    templateUrl: '/templates/bio.html',
    controller: 'BioController'
  }).when('/portfolio', {
    templateUrl: '/templates/portfolio.html',
    controller: 'PortfolioController'
  }).when('/music', {
    templateUrl: '/templates/music.html',
    controller: 'MusicController'
  })
// otherwise
  .otherwise('/');
}]);
