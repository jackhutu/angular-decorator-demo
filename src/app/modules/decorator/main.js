(function () {
	'use strict';

	angular.module('ngDecoratorDemo')
	.config(function ($stateProvider) {
		$stateProvider
		  .state('home', {
		    url: '/',
		    templateUrl: 'app/modules/decorator/main.html',
		    controller: 'MainCtrl',
		    controllerAs: 'main'
		  });
	});
})();
