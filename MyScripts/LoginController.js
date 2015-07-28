app.controller('LoginController', function ($scope, $rootScope, $routeParams, $location, LoginFactory) {
    $rootScope.isUserLoggedIn = false;
    console.log("Welcome");
    $scope.loginForm = {
        //emailAddress: '',
        username: '',
        password: '',
        rememberMe: false,
        returnUrl: $routeParams.returnUrl,
        loginFailure: false
    };

    $scope.login = function () {
        //  $scope.isUserLoggedIn = false;
        var result = LoginFactory($scope.loginForm.username, $scope.loginForm.password, $scope.loginForm.rememberMe);
        result.then(function (result) {
            if (result.success) {
                //$scope.logoff = true;
                $rootScope.isUserLoggedIn = true;
                $location.path('/showemployees');



                //if ($scope.loginForm.returnUrl !== undefined) {
                //    $scope.name = "Login successful!";
                // $location.path('/users');

            } else {
                $location.path($scope.loginForm.returnUrl);
            }
            //} else {
            //    $scope.loginForm.loginFailure = true;
            //}
        });
    }

    $scope.logout = function () {
        $rootScope.isUserLoggedIn = false;
          sessionStorage.clear();
        //  $location.path('/login');
    }

});

