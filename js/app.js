var app = angular.module('personal-page', ['ngRoute', 'mm.foundation']);
app.config(['$routeProvider', function(route) {
  route.when('/', {
    templateUrl: '/public/templates/home.html',
    controller: 'HomeController'
  }).when('/about', {
    templateUrl: '/public/templates/about.html',
    controller: 'AboutController'
  }).when('/portfolio', {
    templateUrl: '/public/templates/portfolio.html',
    controller: 'PortfolioController'
  }).when('/music', {
    templateUrl: '/public/templates/music.html',
    controller: 'MusicController'
  }).when('/links', {
    templateUrl: '/public/templates/links.html',
    controller: 'LinksController'
  })
// otherwise
  .otherwise('/');
}]);
