//The controller has dependency upon the Service and ShareData
app.controller('ShowDepartmentsController', function ($scope, $location, SinglePageCRUDService, ShareData) {

    loadRecords();

    //Function to Load all Departments Records.   
    function loadRecords() {
        var promiseGetDepartments = SinglePageCRUDService.getDepartments();

        promiseGetDepartments.then(function (pl) {

            $scope.Departments = pl.data
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Departments', errorPl;
              });
    }


    //Method to route to the adddepartment
    $scope.addDepartment = function () {
        $location.path("/adddepartment");
    }

    //Method to route to the editDepartment
    //The Id passed to this method is further set to the ShareData.
    //This value can then be used to communicate across the Controllers
    $scope.editDepartment = function (Id) {
        ShareData.value = Id;
        $location.path("/editdepartment");
    }

    //Method to route to the deleteDepartment
    //The Id passed to this method is further set to the ShareData.
    //This value can then be used to communicate across the Controllers
    $scope.deleteDepartment = function (Id) {
        ShareData.value = Id;
        $location.path("/deletedepartment");
    }
});
