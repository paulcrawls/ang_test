/**
 *
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 *
 */
;(function() {


  var app = angular.module('boilerplate', ['ngRoute', 'ui.sortable']);

  /**
   * Definition of the main app module and its dependencies
   */
  app
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   *
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    $httpProvider.interceptors.push('authInterceptor');

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   *
   */
  app
    .factory('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$rootScope', '$q', 'LocalStorage', '$location'];

  function authInterceptor($rootScope, $q, LocalStorage, $location) {

    return {

      // intercept every request
      request: function(config) {
        config.headers = config.headers || {};
        return config;
      },

      // Catch 404 errors
      responseError: function(response) {
        if (response.status === 404) {
          $location.path('/');
          return $q.reject(response);
        } else {
          return $q.reject(response);
        }
      }
    };
  }


  /**
   * Run block
   */
  app
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

  }


})();
