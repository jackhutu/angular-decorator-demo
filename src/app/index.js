(function () {
	'use strict';

	angular.module('ngDecoratorDemo', [
			'ngAnimate',
			'ngCookies',
			'ngTouch',
			'ngSanitize',
			'ui.router', 
			'ui.bootstrap',
			'ngLodash',
			'ngProgress',
			'toaster',
			'ngFileUpload'
		])
	.config(function ($logProvider,$stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, IsDebug) {
	  $locationProvider.html5Mode(true);
	  $httpProvider.defaults.timeout = 500000;
	  $httpProvider.defaults.withCredentials = true;
	  // $httpProvider.interceptors.push('AuthInterceptor');
	  // Enable log
	  $logProvider.debugEnabled(IsDebug);
	  $urlRouterProvider.otherwise('/');
	})
	  .run(function ($rootScope, ngProgressFactory, $state) {

			// //加载进度
			$rootScope.progressbar = ngProgressFactory.createInstance();


	    // 页面权限判断
	    $rootScope.$on('$stateChangeStart', function (event, toState) {
	    	$rootScope.progressbar.setColor('green');
				$rootScope.progressbar.reset(); // Required to handle all edge cases.
				$rootScope.progressbar.start();

	    });

			// When route successfully changed.
			$rootScope.$on('$stateChangeSuccess', function(ev,toState,toParams,fromState,fromParams) {
				$rootScope.progressbar.complete();
				$rootScope.previousState = fromState;
				$rootScope.previousParams = fromParams;
			});
			//sns signin 拦截
			$rootScope.$on('$locationChangeSuccess', function(ev, url, oldUrl){

			});
			// When some error occured.
			$rootScope.$on('$stateChangeError', function() {
				$rootScope.progressbar.reset();
			});

	  });
})();
