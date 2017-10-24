var app = angular.module("app",[]); //create new module

app.controller('Controller', ['$scope', function($scope) {
  $scope.name = 'Tobias';
  //$scope.Hi = "Test"
}])
.directive('myDialog', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {
        sname: '@myParam'
    },
    controller:['$scope', function MyTabsController($scope) {
        $scope.test = 'Test from directive controller!!!!-';
      }],
    templateUrl: 'my-dialog.html'
  };
});


// task-products
app.controller('ProductController',function() {
  })
  .directive('addBlock', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
         
      },
      controller:['$scope', 'productsSrv', function addBlockController($scope, productsSrv) {
        $scope.addProduct = function(name, count) {
            productsSrv.add(name, count);
        };
      }],
      templateUrl: 'add-product.html'
    };
  })
  .directive('productList', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
         
      },
      controller:['$scope', 'productsSrv', function productListController($scope, productsSrv) {
       //--if use function   
       // $scope.product_list = function() {
            //return productsSrv.returnProducts();
       // };

       //--without function
       $scope.product_list = productsSrv.returnProducts();
      }],
      templateUrl: 'product-list.html'
    };
  })
.factory('productsSrv',  function() {
    var products = [];
    //var -1
    /*
    function add(name, count){
            var product = {}
            product['name'] = name
            product['count'] = count
            products.push(product)
            console.log(products)

    }

    function returnProducts(){
        return products;
    }
    return { add: add, returnProducts: returnProducts}
    */

    //var - 2
    return{
        add: function add(name, count){
            var product = {};
            product['name'] = name;
            product['count'] = count;
            products.push(product);
            console.log(products);
        },
        returnProducts: function(){
            return products;
        }
    }

});
