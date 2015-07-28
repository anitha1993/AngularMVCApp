app.controller('RegisterController', function ($scope, $http, $location, RegistrationFactory) {
    //GetDepartmentsList();
    //function GetDepartmentsList() {
    $http({
        method: 'Get',
        url: '/Account/GetDepartmentsList'
    }).success(function (data) {
        $scope.DepartmentsList = data;
    }).error(function () {
        $scope.errorMessage = 'Not found';
    });

    $http({
        method: 'Get',
        url: '/Role/GetRolesList'
    }).success(function (data) {
        $scope.RolesList = data;
    }).error(function () {
        $scope.errorMessage = 'Not found';
    });


    $scope.registerForm = {
        username: '',
        emailAddress: '',
       // Departments: '',
        Roles: '',
        registrationFailure: false
    };

    $scope.Register = function (Roles) {
        
        console.log("Gdf = " + Roles.Name);
        console.log("Gdf = " +JSON.stringify(Roles));
        var result = RegistrationFactory($scope.registerForm.username, $scope.registerForm.emailAddress, Roles.Name, Roles.Id);
        result.then(function (result) {
            if (result.success) {
                $scope.name = "Registration Successful!";
                $location.path('/users');
            } else {
                $scope.registerForm.registrationFailure = true;
            }
        });
    }
});

