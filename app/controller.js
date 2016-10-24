/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', ['$scope', '$http', '$filter', MainController]);

  function MainController($scope, $http, $filter) {

    function getData(url, name) {
      $http.get(url)
        .then(function(res){
          $scope[name] = res.data;
        });
    }

    getData('data/first.json', 'elementsFirst');
    getData('data/second.json', 'elementsSecond');

    /** SORTABLE **/
    $scope.sortableOptions = {
      connectWith: '.context .pane',
      // called after a node is dropped
      receive: function(e, ui) {
        var id = ui.item.prop('id');
      }
    };

    $scope.orderBy = function() {
      $scope.elementsFirst = $filter('orderBy')($scope.elementsFirst, $scope.orderProperty);
    };

    $scope.$watchCollection('elementsFirst', function () {
      $scope.orderBy();
    });
  }

  angular
    .module('boilerplate')
    .filter('unique', function() {
      return function(collection) {
        function unique_fast(a) {
          var seen = {};
          var out = [];
          var len = a.length;
          var j = 0;
          for(var i = 0; i < len; i++) {
            var item = a[i];
            if(seen[item] !== 1) {
              seen[item] = 1;
              out[j++] = item;
            }
          }
          return out;
        }

        return (unique_fast(collection)).sort();
      };
    });


})();
