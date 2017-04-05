'use strict';
/*
* LoginCtrl
*/
angular.module('angularjsApp')
.controller('LoginCtrl', function (authUser) {

  var vm = this;
  vm.loginForm = {
    email: '',
    password: ''
  }
  /*
  * login
  */
  vm.login = function () {
    authUser.loginApi(vm.loginForm);
  }

});
