;(function() {

  'use strict';

  angular
    .module('boilerplate')
    .directive('jsonLists', lists);

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
          console.log(1);
          $('.sort').toggleClass('checked unchecked');
        }

      }
    };

    return directiveDefinitionObject;
  }

})();
