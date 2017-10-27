function productController($scope, shopingCart, $stateParams){
    var id = $stateParams.productId
    $scope.getItems = function(){
        return shopingCart.getItems();
    }
    var product_item;
    $scope.getItems().forEach(function(product) {
    if(product.id == id){
        product_item = product;
        return;
    }
    }, this);
    $scope.product = product_item;
    console.log($scope.product);

    $scope.add_cart = function (product){
        //console.log(product_id)
        var bag = [];							
		if (localStorage['bag']) {
			bag = JSON.parse(localStorage['bag']);
        }
   
        //bag.push(product);
		//localStorage['bag'] = JSON.stringify(bag);
        //localStorage['bag'] = product_id;
    }
}