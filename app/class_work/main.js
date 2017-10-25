angular.module('app',['ui.router'])
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
     $scope.product_list = productsSrv.returnProducts();
    }],
    templateUrl: 'product-list.html'
  };
})

.factory('productsSrv',  function() {
  var products = [];
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
})

.component('leftSide', {
  bindings: {

  },
  controller:  leftSideController,
  templateUrl: 'leftSide.html'
})
.component('rightSide', {
  bindings: {

  },
  controller:  rightSideController,
  templateUrl: 'rightSide.html'
})

 
function leftSideController(){

}

function rightSideController(){
  
  }
