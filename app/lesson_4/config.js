angular.module('app')
.config(function($stateProvider) {
  $stateProvider.state('home',{
      component: 'home'
    });
  
    $stateProvider.state('test',{
      resolve:{
        getResolveUsers: function($http){
          var url = 'https://jsonplaceholder.typicode.com/users';
          return $http.get(url);
        }

      },
      component: 'test1'
    });

    $stateProvider.state('testOnInit',{
      resolve:{
        getResolveUsers: function($http){
          var url = 'https://jsonplaceholder.typicode.com/users';
          return $http.get(url);
        }
        
      },
      component: 'test2'
    });

    $stateProvider.state('contacts',{
      template: 'Contacts list page',
      controller: function($scope){}
    });
  });