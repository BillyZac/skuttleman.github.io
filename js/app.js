var app = angular.module('personal-page', ['ngRoute', 'mm.foundation']);
app.config(['$routeProvider', function(route) {
  route.when('/', {
    templateUrl: '/templates/home.html',
    controller: 'HomeController'
  }).when('/about', {
    templateUrl: '/templates/about.html',
    controller: 'AboutController'
  }).when('/portfolio', {
    templateUrl: '/templates/portfolio.html',
    controller: 'PortfolioController'
  }).when('/music', {
    templateUrl: '/templates/music.html',
    controller: 'MusicController'
  }).when('/links', {
    templateUrl: '/templates/links.html',
    controller: 'LinksController'
  })
// otherwise
  .otherwise('/');
}]);
