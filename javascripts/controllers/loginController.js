(function () {
  'use strict';

  angular
  .module('dating')
  .controller('LoginController', LoginController);

  function LoginController(LoginService, $location) {
    let vm = this;
    LoginService.allMembers().then(members => {
      vm.allMembers = members;
    });
    vm.reg = function(newUser) {
      LoginService.regUser(newUser);
      vm.allMembers.push(newUser);
    };
    vm.auth = function(user) {
      LoginService.authUser(user);
    };
    vm.editMember = function(user) {
      LoginService.editMember(user)
    };
  };
})();
