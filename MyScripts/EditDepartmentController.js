app.controller("EditDepartmentController", function ($scope, $location, ShareData, SinglePageCRUDService) {

    getDepartment();
    function getDepartment() {
        var promiseGetDepartment = SinglePageCRUDService.getDepartment(ShareData.value);
        promiseGetDepartment.then(function (pl) {
            $scope.Department = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Employee', errorPl;
              });
    }

    //The Save method used to make HTTP PUT call to the WEB API to update the record

    $scope.save = function () {
        var Department = {
            Id: $scope.Department.Id,
            Name: $scope.Department.Name,
           
        };

        var promisePutDepartment = SinglePageCRUDService.deptput($scope.Department.Id, Department);
        promisePutDepartment.then(function (pl) {
            $location.path("/showdepartment");
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Department', errorPl;
              });
    };
});