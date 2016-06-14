(function () {
  'use strict';

  angular
  .module('dating', ['ngRoute'])
  .config(config);

  function config( $routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/login.html',
      controllerAs: 'login',
      controller: 'LoginController'
    });
  }
})();
