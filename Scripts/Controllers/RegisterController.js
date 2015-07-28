var RegisterController = function ($scope, $http, $location, RegistrationFactory) {

    GetDepartmentsList();
    function GetDepartmentsList() {
        $http({
            method: 'Get',
            url: '/Account/GetDepartmentsList'
        }).success(function (data) {
            $scope.DepartmentsList = data;
        }).error(function () {
            $scope.errorMessage = 'Not found';
        });
    }

    $scope.registerForm = {
        emailAddress: '',
        password: '',
        confirmPassword: '',

        registrationFailure: false
    };

   
    

    $scope.Register = function () {
        var result = RegistrationFactory($scope.registerForm.emailAddress, $scope.registerForm.password, $scope.registerForm.confirmPassword);
        result.then(function (result) {
            if (result.success) {
                $scope.name = "Registration Successful!";
                $location.path('/users');
            } else {
                $scope.registerForm.registrationFailure = true;
            }
        });
    }
}

RegisterController.$inject = ['$scope','$http', '$location', 'RegistrationFactory'];