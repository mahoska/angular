angular.module('app',['ui.router'])
.directive('addBlock', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
       
    },
    controller:['$scope', 'productsSrv', function addBlockController($scope, productsSrv) {
      $scope.addProduct = function(name, description) {
          productsSrv.add(name, description);
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
  var books = [
    {
      'id': 1,
      'name': '180 Days of Reading for Kindergarten',
      'description':'Regular practice is the best way to reinforce concepts and allow students to gain confidence and mastery of skills. With 180 Days of Reading for Kindergarten you get reading and critical thinking exercises for students for every day of the school year.'
    },
    {
      'id': 2,
      'name':'180 Days of Math for Kindergarten',
      'description':'Consistent practice is the best way for students to develop math skills and confidence, at any grade level. 180 Days of Math for Kindergarten provides workbook problems for each day of the school year, giving students ample time to use the skills they learn in class.'
    },
    {
      'id': 3,
      'name':'Teach Your Child to Read in 100 Easy Lessons',
      'description':'Is your child halfway through first grade and still unable to read? Is your preschooler bored with coloring and ready for reading? Do you want to help your child read, but are afraid you"ll do something wrong? '
    }
  ],
  servise = {
    add: function (name, description){
        var count_book = books.length;
        var book = {};
        book['id'] = count_book+1;
        book['name'] = name;
        book['description'] = description;
        books.push(book);
        console.log(books);
    },
    
    returnProducts: function(){
        return books;
    },
    
   /* getBook: function(id) {
      var books = servise.returnProducts();
      var book_item;
      books.forEach(function(book) {
       if(book.id == id){
         book_item = book
         return;
       }
      }, this);
      return book_item
    }*/
}
return servise;
})

.component('products', {
  bindings: {

  },
  controller:  productsController,
  templateUrl: 'products.html'
})

.component('book', {
  bindings: { book: '<' },
  controller:  bookController,
  templateUrl: 'book.html'
});


 
function productsController(){

}

function bookController($scope, productsSrv, $stateParams){
 var id = $stateParams.bookId
 var books = productsSrv.returnProducts();
 var book_item;
 books.forEach(function(book) {
  if(book.id == id){
    book_item = book
    return;
  }
 }, this);
 this.book = book_item
 this.name = this.book.name
 this.description = this.book.description

}

