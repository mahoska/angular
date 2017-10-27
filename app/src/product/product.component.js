angular.module('app')
.component('product', {
    bindings: { product: '<' },
    controller:  productController,
    templateUrl: './src/product/product.html'
  });