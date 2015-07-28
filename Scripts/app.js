var app = angular.module('app', ['ngRoute']);

app.factory('LoginFactory', LoginFactory);
app.factory('RegistrationFactory', RegistrationFactory);
app.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
//app.factory('SinglePageCRUDFactory', SinglePageCRUDFactory);
app.factory('ShareData', function () {
    return { value: 0 }
});




//app.controller('LoginController', LoginController);
//app.controller('RegisterController', RegisterController);
//app.controller('EmployeeController', EmployeeController);
//app.controller('ShowEmployeesController', ShowEmployeesController);
//app.controller('AddEmployeeController', AddEmployeeController);
//app.controller('EditEmployeeController', EditEmployeeController);
//app.controller('DeleteEmployeeController', DeleteEmployeeController);



var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);
    $routeProvider.

        when('/Login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/Register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        })
          .when('/Employees', {
              templateUrl: '/Account/Index',
              controller: EmployeeController
          })

   .when('/EmployeesIndex', {
       templateUrl: '/EmployeeInfo/Index',
       controller: ShowEmployeesController
   })
    .when('/ShowEmployees',
    {
        templateUrl: 'EmployeeInfo/ShowEmployees',
        controller: 'ShowEmployeesController',
        caseInsensitiveMatch: true
    })
         .when('/AddEmployee',
    {
        templateUrl: 'EmployeeInfo/AddEmployee',
        controller: 'AddEmployeeController',
        caseInsensitiveMatch: true
    })
    .otherwise(
    {
        redirectTo: '/'
    });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

app.config(configFunction);