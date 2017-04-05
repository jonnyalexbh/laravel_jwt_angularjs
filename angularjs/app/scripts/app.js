'use strict';

/**
* @ngdoc overview
* @name angularjsApp
* @description
* # angularjsApp
*
* Main module of the application.
*/
angular
.module('angularjsApp', [
  'authService',
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'satellizer',
  'toastr'
])
.config(function ($routeProvider, $authProvider) {

  $authProvider.loginUrl = 'http://localhost:8000/auth_login';

  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  $routeProvider
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  $routeProvider
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.run(function($rootScope, $location, authUser, toastr){
  var privateRoutes = ['/', '/about'];

  $rootScope.$on('$routeChangeStart', function () {
    if(($.inArray($location.path(), privateRoutes) !== -1) && !authUser.isLoggedIn()){
      toastr.error('Debe iniciar sesión para poder continuar', 'Mensaje!');
      $location.path('/login');
    }
  });

});
