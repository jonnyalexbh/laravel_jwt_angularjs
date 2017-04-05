'use strict';
/*
* authUser
*/
angular.module('authService', [])
.factory('sessionControl',function () {
  return {
    get: function (key) {
      return sessionStorage.getItem(key);
    },
    set: function (key, val) {
      return sessionStorage.setItem(key, val);
    },
    unset: function (key) {
      return sessionStorage.removeItem(key);
    }
  };
})
.factory('authUser', function ($auth, sessionControl, toastr, $location) {
  /*
  * cacheSession
  */
  var cacheSession = function (email, username, avatar) {
    sessionControl.set('userIsLogin', true);
    sessionControl.set('email', email);
    sessionControl.set('username', username);
    sessionControl.set('avatar', avatar);
  };
  /*
  * unCacheSession
  */
  var unCacheSession= function () {
    sessionControl.unset('userIsLogin');
    sessionControl.unset('email');
    sessionControl.unset('username');
    sessionControl.unset('avatar');
  };
  /*
  * login
  */
  var login = function (loginForm) {
    $auth.login(loginForm).then(
      function (response) {
        cacheSession(response.data.user.email, response.data.user.username, loginForm.avatar);
        $location.path('/');
        toastr.success('Sesión iniciada con éxito', 'Mensaje!');
      },
      function (error) {
        unCacheSession();
        toastr.error(error.data.error, 'Mensaje!');
        console.log(error);
      }
    );
  };
  /*
  * return
  */
  return {
    loginApi: function (loginForm) {
      login(loginForm);
    },
    isLoggedIn: function () {
      return sessionControl.get('userIsLogin') !== null;
    }

  }

});
