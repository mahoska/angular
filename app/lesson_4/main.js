angular.module('app',['ui.router'])

angular.module('app')
.factory('userList', function($q, $http){
  return{
    getUsers:function(){
      var defer = $q.defer();
      setTimeout(function(){
        if(true)
        defer.resolve([{id:1, name:'Alex'}])
        else
        defer.reject('Error');
      },1000)
      return defer.promise;
    },

    getUsersRest: function(){
      return $http.get('https://jsonplaceholder.typicode.com/users');
    },

    getUser: function(id){
      var defer = $q.defer();
      var url = 'https://jsonplaceholder.typicode.com/users';
      var httpU = $http.get(url);
      httpU.then(function(users){
        var user = users.data.filter(function(u){
            return  u.id == id
        });
        defer.resolve(user);
      })
      return defer.promise;
    }

  }
})

.factory('usersFactory', function(){
  return{
      getUser: function(usersArr,id){
          var user = usersArr.data.filter(function(u){
              return  u.id == id
          });
        return user;
      }
  }
})

.component('home', {
  
  /*
  template: 'home Page {{users}}',
  controller:  function($scope, userList){
    userList.getUsers().then(success, error);
    function success(data){
      $scope.users = data;
    }
    function error(err){}
  */


  /*  
  template: 'home Page {{users}}',
  controller:  function($scope, userList){
    function error(err){}
    userList.getUsersRest().then(success, error);
    function success(users){
      $scope.users = users.data;
    }
    function error(err){}
*/


    template: 'home Page {{user}}',
    controller:  function($scope, userList){
      userList.getUser(2).then(success, error);
      function success(user){
        $scope.user = user;
      }
      function error(err){}
  }
  
})



.component('test1', {
    bindings:{
      getResolveUsers:'<'
    },
    template: 'home Page Resolve=> {{$ctrl.getResolveUsers}}  <br> <b>And user2</b>=> {{user}}',
    
    controller:  function($scope, userList,){
      //this.getResolveUsers
      //$scope.$ctrl.getResolveUser
     
      userList.getUser(2).then(success, error);
        function success(user){
          $scope.user = user;

         
        }
        function error(err){}
     
  }
  
})

.component('test2', {
  bindings:{
    getResolveUsers:'<'
  },
  template: '<b>And user2</b>=> {{user}}',
  controller:  function($scope, /*userList,*/ usersFactory){
   
   this.$onInit = function(){
    $scope.user = usersFactory.getUser(this.getResolveUsers, 2);
   }

}

})
