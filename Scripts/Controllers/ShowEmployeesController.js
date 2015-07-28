//The controller has dependency upon the Service and ShareData
var ShowEmployeesController = function ($scope, $location, SinglePageCRUDFactory, ShareData) {

    loadRecords();
    //Function to Load all Employees Records.   
    function loadRecords() {
        var promiseGetEmployees = SinglePageCRUDFactory.getEmployees();
 

        promiseGetEmployees.then(function (pl) {
          
            $scope.Employees = pl.data
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
};
ShowEmployeesController.$inject = ['$scope', '$location', 'SinglePageCRUDFactory', 'ShareData'];
