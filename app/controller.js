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
    .controller('MainController', MainController);

  function MainController($scope, $http) {

    function getData(url, name) {
      $http.get(url)
        .then(function(res){
          $scope[name] = res.data;
        });
    }

    getData('data/first.json', 'elementsFirst');
    getData('data/second.json', 'elementsSecond');

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
