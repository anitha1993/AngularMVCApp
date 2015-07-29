//The controller has dependency upon the Service and ShareData
app.controller('ShowEmployeesController', function ($scope,$rootScope, $location, SinglePageCRUDService, ShareData) {
     $scope.isUserLoggedIn = false;
    //$scope.isUserLoggedIn = true;
    loadRecords();

    //Function to Load all Employees Records.   
    function loadRecords() {
        $rootScope.isUserLoggedIn=true;
        var promiseGetEmployees = SinglePageCRUDService.getEmployees();
 
        promiseGetEmployees.then(function (pl) {
          
            $rootScope.Employees = pl.data
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Employee', errorPl;
              });
    }


    //Method to route to the addemployee
    $scope.addEmployee = function () {
        $location.path("/addemployee");
    }

    //Method to route to the editEmployee
    //The Id passed to this method is further set to the ShareData.
    //This value can then be used to communicate across the Controllers
    $scope.editEmployee = function (Id) {
        ShareData.value = Id;
        $location.path("/editemployee");
    }

    //Method to route to the deleteEmployee
    //The Id passed to this method is further set to the ShareData.
    //This value can then be used to communicate across the Controllers
    $scope.deleteEmployee = function (Id) {
        ShareData.value = Id;
        $location.path("/deleteemployee");
    }
});
