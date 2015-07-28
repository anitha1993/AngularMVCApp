app.controller("DeleteEmployeeController", function ($scope, $location, ShareData, SinglePageCRUDService) {
    //$scope.isUserAdmin == true;
    getEmployee();
    function getEmployee() {
 
        var promiseGetEmployee = SinglePageCRUDService.getEmployee(ShareData.value);
 
        promiseGetEmployee.then(function (pl) {
            $scope.Employee = pl.data;
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Employee', errorPl;
              });
    }
 
    //The delete method used to make HTTP DELETE call to the WEB API to update the record
    $scope.delete = function () {
        var promiseDeleteEmployee = SinglePageCRUDService.empdelete(ShareData.value);
 
        promiseDeleteEmployee.then(function (pl) {
            $location.path("/showemployee");
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Employee', errorPl;
              });
    };
 
});
