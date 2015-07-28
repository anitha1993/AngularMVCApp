app.controller("EditEmployeeController", function ($scope, $location, ShareData, SinglePageCRUDService) {
    //$scope.isUserAdmin == true;
    getEmployee();
    function getEmployee() {
        var promiseGetEmployee = SinglePageCRUDService.getEmployee(ShareData.value);
        promiseGetEmployee.then(function (pl) {
            $scope.Employee = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    }

    //The Save method used to make HTTP PUT call to the WEB API to update the record

    $scope.save = function () {
        var Employee = {
            Id: $scope.Employee.Id,
            EmpName: $scope.Employee.EmpName,
            Salary: $scope.Employee.Salary,
            DeptName: $scope.Employee.DeptName,
            Designation: $scope.Employee.Designation
        };

        var promisePutEmployee = SinglePageCRUDService.empput($scope.Employee.Id, Employee);
        promisePutEmployee.then(function (pl) {
            $location.path("/showemployee");
        },
              function (errorPl) {
                  $scope.error = 'failure loading Employee', errorPl;
              });
    };
});