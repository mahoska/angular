angular.module('app')
.directive('iconBasket', function(){
    return{
        template: 'Items: {{itemsCount}}',
        controller: function($scope, shopingCart){
            $scope.itemsCount = shopingCart.getItemsCount();
        }
    }
});