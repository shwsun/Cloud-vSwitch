'use strict';

/**
 * @ngdoc function
 * @name vSwitchUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vSwitchUiApp
 */
angular.module('vSwitchUiApp')
  .controller('MainCtrl', function($scope, $location, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logout = logout;

    $scope.$watch(function() {
      return $rootScope.logged;
    }, function() {
      $scope.logged = $rootScope.logged;
      $scope.username = localStorage.getItem('username');
    }, true);

    function logout() {
      $rootScope.logged = false;
      //$scope.logged = false;
      localStorage.clear();
      $location.path('/login');
    }

    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      if (!current) {
        // handle session start event
        if (localStorage.getItem('token') != null) {
          $scope.username = localStorage.getItem('username');
          $scope.logged = true;
        } else {
          $scope.logged = false;
        }
      }
    });

  });
