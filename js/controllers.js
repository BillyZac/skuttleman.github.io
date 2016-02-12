app.controller('HomeController', [
  '$scope', '$rootScope', 'loadJSON', function($scope, $rootScope, loadJSON) {
    $rootScope.view = 'home';
    $rootScope.backgroundImage = '/images/snow.jpg';
  }
]);

app.controller('BioController', [
  '$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.view = 'bio';
    $rootScope.backgroundImage = '/images/hiking.jpg';
  }
]);

app.controller('PortfolioController', [
  '$scope', '$rootScope', 'loadJSON', function($scope, $rootScope, loadJSON) {
    $rootScope.view = 'portfolio';
    $rootScope.backgroundImage = '/images/portfolio.jpg';
    loadJSON.load('portfolio').then(function(json) {
      $scope.projects = json.data.data;
    });
  }
]);

app.controller('MusicController', [
  '$scope', '$rootScope', 'loadJSON', function($scope, $rootScope, loadJSON) {
    $rootScope.view = 'music';
    $rootScope.backgroundImage = '/images/music.jpg';
    loadJSON.load('music').then(function(json) {
      $scope.songs = json.data.songs;
      $scope.albums = json.data.albums;
    });
    $scope.selectSong = function() {
      var controls = document.getElementsByClassName('audio-controls')[0];
      $scope.currentSong = this.song;
      controls.src = this.song.src;
      controls.play();
    };
  }
]);
