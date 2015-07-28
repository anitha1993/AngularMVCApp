app.controller("DeleteDepartmentController", function ($scope, $location, ShareData, SinglePageCRUDService) {

    getDepartment();
    function getDepartment() {

        var promiseGetDepartment = SinglePageCRUDService.getDepartment(ShareData.value);

        promiseGetDepartment.then(function (pl) {
            $scope.Department = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Department', errorPl;
              });
    }

    //The delete method used to make HTTP DELETE call to the WEB API to update the record
    $scope.delete = function () {
        var promiseDeleteDepartment = SinglePageCRUDService.deptdelete(ShareData.value);

        promiseDeleteDepartment.then(function (pl) {
            $location.path("/showdepartment");
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Department', errorPl;
              });
    };

});
