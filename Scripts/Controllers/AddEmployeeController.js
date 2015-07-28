var AddEmployeeController = function ($scope, $location, SinglePageCRUDFactory) {
    $scope.Id = 0;

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
        var promisePost = SinglePageCRUDFactory.post(Employee);
        promisePost.then(function (pl) {
            $scope.Id = pl.data.Id;
            alert("Id " + pl.data.Id);
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Employee', errorPl;
              });

    };
};
AddEmployeeController.$inject = ['$scope', '$location', 'SinglePageCRUDFactory'];