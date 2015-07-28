app.controller('AddEmployeeController', function ($scope, $rootScope, $http, $location, SinglePageCRUDService) {
    //$scope.isUserAdmin == true;

    $scope.Id = 0;
    $http({
        method: 'Get',
        url: '/Account/GetDepartmentsList'
    }).success(function (data) {
        $scope.DepartmentsList = data;
    }).error(function () {
        $scope.errorMessage = 'Not found';
    });
    //The Save scope method used to define the Employee object and 
    //post the Employee information to the server by making call to the Service
    $scope.save = function () {
        var Employee = {
            Id: $scope.Id,
            EmpName: $scope.EmpName,
            Salary: $scope.Salary,
            DeptName: $scope.DeptName,
            Designation: $scope.Designation
        };

        var promisePost = SinglePageCRUDService.emppost(Employee);
        promisePost.then(function (pl) {
            //$rootScope.Employees.push(pl.config.data);
           // $scope.Employee = pl.config.data
              $scope.Id = pl.config.data.Id;
              alert("Id " + pl.config.data.Id);
            $location.path("/showemployees");
        },

              function (errorPl) {
                  $scope.error = 'Failure loading Employee', errorPl;
              });

    };
});