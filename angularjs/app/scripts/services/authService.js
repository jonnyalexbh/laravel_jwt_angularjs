'use strict';
/*
* authUser
*/
angular.module('authService', [])
.factory('authUser', function ($auth) {

  var login = function (loginForm) {
    $auth.login(loginForm).then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  return {
    loginApi: function (loginForm) {
      login(loginForm);
    }
  }

});
