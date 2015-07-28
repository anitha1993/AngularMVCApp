app.controller('AddDepartmentController', function ($scope, $location, SinglePageCRUDService) {
    $scope.Id = 0;

    //The Save scope method used to define the Employee object and 
    //post the Department information to the server by making call to the Service
    $scope.save = function () {
        var Department = {
            Id: $scope.Id,
            Name: $scope.Name,
          
        };
        var promisePost = SinglePageCRUDService.deptpost(Department);
        promisePost.then(function (pl) {
            $scope.Id = pl.data.Id;
            alert("Id " + pl.data.Id);
        },
              function (errorPl) {
                  $scope.error = 'Failure loading Department', errorPl;
              });

    };
});