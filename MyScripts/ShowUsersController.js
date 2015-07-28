//The controller has dependency upon the Service and ShareData
app.controller('ShowUsersController', function ($scope, $rootScope, $location, SinglePageCRUDService, ShareData) {
    $scope.isUserLoggedIn = false;
    loadRecords();

    //Function to Load all Users Records.   
    function loadRecords() {
        $rootScope.isUserLoggedIn = true;
        var promiseGetUsers = SinglePageCRUDService.getUsers();

        promiseGetUsers.then(function (pl) {

            $scope.Users = pl.data
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Users', errorPl;
              });
    }


    //Method to route to the addemployee
    $scope.addUser= function () {
        $location.path("/adduser");
    }

    //Method to route to the editEmployee
    //The Id passed to this method is further set to the ShareData.
    //This value can then be used to communicate across the Controllers
    $scope.editUser= function (Id) {
        ShareData.value = Id;
        $location.path("/edituser");
    }

    //Method to route to the deleteEmployee
    //The Id passed to this method is further set to the ShareData.
    //This value can then be used to communicate across the Controllers
    $scope.deleteUser = function (Id) {
        ShareData.value = Id;
        $location.path("/deleteuser");
    }
});
