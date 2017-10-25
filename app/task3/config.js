angular.module('app').config(function($stateProvider) {
    var productList = {
      name: 'products',
      url: '/products',
      //templateUrl: "products.html"
      component: 'products',
      resolve: {
        books: function(productsSrv) {
          return productsSrv.returnProducts();
        }
      }
    }
  
    var book = {
      name: 'book',
      url: '/book/{bookId}',
      //templateUrl: "book.html"
      component: 'book',
     /* resolve: {
        book_item: function(productsSrv, $transition$) {
          return productsSrv.getBook($transition$.params().bookId);
        }
    }*/
  }

  
    $stateProvider.state(productList);
    $stateProvider.state(book);
  });