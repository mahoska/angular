var app=angular.module('app',[]);


app.directive('username', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

      ctrl.$asyncValidators.username = function(modelValue, viewValue) {
        var def = $q.defer();

        $timeout(function() {
            var fl= false
             usernames.forEach(function(element) {
                if(element == modelValue){
                    fl = true
                }
            }, this);

            if(fl){
                def.resolve();
            }else {
                def.reject();
            }
        }, 500);

        return def.promise;
      };
    }
  };
});
