var app = angular.module("app",[]) //create new module

//var-2-controller
app.controller('SetProduct',SetProduct)

function SetProduct($scope){
    this.product_list = [
        {'name':'apple','count':2}, 
        {'name':'orange','count':5},
        {'name':'tomato', 'count':4}, 
        {'name':'cheese', 'count':3}, 
        {'name':'milk','count':1}

    ]
    var self = this
    this.addProduct = function(name, count){
        var product = {}
        product['name'] = name
        product['count'] = count
        self.product_list.push(product)
        $scope.prod_name=''
        $scope.prod_count=''
    }
}






/////////////////////////////////////////////////////////////////
app.controller('SettingController',SettingController)

function SettingController($scope){
    this.name="John Smith"
    $scope.name="Ivan"
}

app.controller('SettingController1',SettingController1)

function SettingController1($scope){

}

app.controller('SettingController2',SettingController2)

function SettingController2($scope){
    this.names = []
    var self = this
    this.addName = function(name){
        //var index = self.names.indexOf(name)
        //if(index == -1){
            self.names.push(name)
            $scope.fname=''
        //}
        //$scope.$apply()
    }
}