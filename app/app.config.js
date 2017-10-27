angular.module('app')
.config(function($stateProvider) {
  var productsState = {
    name: 'products',
    url: '/products',
    component: 'products'
  },

  productState = {
    name: 'product',
    url: '/product/{productId}',
    component: 'product'
   /* resolve: {
      book_item: function(productsSrv, $transition$) {
        return productsSrv.getBook($transition$.params().bookId);
      }
  }*/
}
  $stateProvider.state(productsState);
  $stateProvider.state(productState);
  });