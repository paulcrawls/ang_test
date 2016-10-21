;(function() {

  'use strict';

  angular
    .module('boilerplate')
    .directive('testlists', lists);

  function lists() {
    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'AE',
      link: function($scope, element, attrs) {

        $scope.orderProperty = "+info.name";
        $scope.sortingTag = "";

        $scope.sortProperty = function(column) {
          $('.sort').toggleClass('unchecked checked');

          var currentDirection = $scope.orderProperty.slice(0, 1);
          var dir = '+';

          dir = currentDirection === '+' ? '-' : '+';
          $scope.orderProperty = dir + column;
          $scope.orderBy();
        };

        $scope.sortByTag = function(tag) {
          $('.filter').removeClass('active');
          if ($scope.sortingTag == tag) {
            $scope.sortingTag = '';
          } else {
            $scope.sortingTag = tag;
            $('.filter-' + tag).addClass('active');
          }
        };

      }
    };

    return directiveDefinitionObject;
  }

})();
