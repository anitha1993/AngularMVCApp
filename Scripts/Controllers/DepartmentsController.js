var DepartmentsController = function ($scope, DepartmentsFactory) { // explained in Part 2 about controller
    $scope.Departments = null;
    DepartmentsFactory.GetDepartmentsList().then(function (d) {
        $scope.Departments = d.data; //Success callback
    }, function (error) {
        alert('Error!'); // Failed Callback
    });
}
DepartmentsController.$inject = ['$scope', 'DepartmentsFactory'];        