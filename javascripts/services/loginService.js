(function () {
  'use strict';

  angular
  .module('dating')
  .factory('LoginService', LoginService);

  function LoginService($http) {
    let chosen = [];
    let swagger = "https://galvanize-student-apis.herokuapp.com/gdating";
    return {
      allMembers: function() {
        return
        $http.get(`${swagger}/members`);
      }
      auth: function(user) {
        return
        $http.post(`${swagger}/auth/login`, user);
      }
      reg: function(newUser) {
        $http.post(`${swagger}/auth/register`, newUser);
      }
      change: function(user) {
        $http.put(`${swagger}/members/${id}`, user);
      }
    }
  }
})();
