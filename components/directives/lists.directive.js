;(function() {

  'use strict';

  angular
    .module('boilerplate')
    .directive('mylists', lists);

  function lists() {
    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'AE',
      link: function(scope, element, attrs) {

        scope.$watch(function() {
          angular.element(document).ready(function() {
          });
        });

        scope.sort = function () {
          $('.sort').toggleClass('checked unchecked');
        }

      }
    };

    return directiveDefinitionObject;
  }

})();
