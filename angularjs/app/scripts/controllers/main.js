'use strict';

/**
* @ngdoc function
* @name angularjsApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularjsApp
*/
angular.module('angularjsApp')
.controller('MainCtrl', function () {
  var vm = this;
  vm.menuTemplate = {
    url: 'views/menu.html'
  }
});
