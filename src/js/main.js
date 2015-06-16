var app = angular
  .module("strangular", ['ngRoute'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'mainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
    })

  .controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

    $scope.handle = '';
    $scope.deckArr = [];

    $scope.lowercasehandle = function () {
      return $filter('lowercase')($scope.handle);
    }

    $scope.getDeck = function () {
      $http.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .success(function(data) {
          $scope.deckId = data.deck_id;
          $http.post('https://decked.firebaseio.com/decks.json', data)
            .success(function(response) {
              $scope.deckArr.push(response.name);
              console.log($scope.deckArr);
            })
        })
    }

    alert('hey')

  }]);

