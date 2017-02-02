/**
 * Created by Nithin on 28-Jan-17.
 */
var myApp = angular.module("myRegistration", []);
myApp.controller("RegistrationCtrl", function ($scope , $window) {
    $scope.submit = function(){
        if ($scope.fname == " " || $scope.lname == " " || $scope.mobile == " " || $scope.email == " " || $scope.pwd== " ")
        {
            $window.location.href = './index.html';
        }
        else
            alert('Fields cannot be empty ')
    };

    $scope.cancel = function(){
        $window.location.href = './index.html'
    };

});
