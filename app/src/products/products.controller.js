function productsController($scope, shopingCart){
   $scope.getItems = function(){
        return shopingCart.getItems();
    }
    
}