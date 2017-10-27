angular.module('app')
.factory('shopingCart', function($http){
    var items  = [];
    $http.get('./data.json').then(success, error);
    function success(data){
        items = data.data;
    }
    function error(err){
        console.error(err);
    }
    return{
        getItems: function(){
            return items;
        },
        getItemsCount: function(){
            return items.length;
        },
    }

})