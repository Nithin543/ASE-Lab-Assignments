/**
 * Created by Nithin on 28-Jan-17.
 */
var app = angular.module('myLogin', []);
app.controller('LoginController',function($scope,$window) {

    $scope.login = function (uname, pwd) {
        localStorage.setItem("name" , uname);
        localStorage.setItem("password" , pwd);
        if ($scope.uname == "Nithin" && $scope.pwd == "12345") {
            $window.location.href = './home.html';
        }
        else
            alert('Login incorrect');
    };
    $scope.register = function(){
        $window.location.href = './registration.html'
    };
});
