var app = angular.module("ApplicationModule", ["ngRoute"]);

//The Factory used to define the value to
//Communicate and pass data across controllers


app.factory("ShareData", function () {
    return { value: 0 }
});

//Defining Routing
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/',
  {
     

  });

    $routeProvider.when('/Register', {
        templateUrl: '/Account/Register',
        controller: 'RegisterController',
        caseInsensitiveMatch: true
    })

    $routeProvider.when('/Login', {
        templateUrl: '/Account/Login',
        controller: 'LoginController',
        caseInsensitiveMatch: true
    })
    $routeProvider.when('/Logout', {
        redirectTo: '/'
        //templateUrl: '/EmployeeInfo/Index',
        //controller: 'LoginController',
        //caseInsensitiveMatch: true
    })

    $routeProvider.when('/EmployeeLanding', {
        templateUrl: '/EmployeeInfo/EmployeeLanding',
        // controller: 'LandingPageController',
        caseInsensitiveMatch: true
    })

    $routeProvider.when('/showemployees',
      {
          templateUrl: 'EmployeeInfo/ShowEmployees',
          controller: 'ShowEmployeesController',
          caseInsensitiveMatch: true
      });
    $routeProvider.when('/addemployee',
    {
        templateUrl: 'EmployeeInfo/AddNewEmployee',
        controller: 'AddEmployeeController',
        caseInsensitiveMatch: true
    });
    $routeProvider.when("/editemployee",
    {
        templateUrl: 'EmployeeInfo/EditEmployee',
        controller: 'EditEmployeeController',
        caseInsensitiveMatch: true
    });
    $routeProvider.when('/deleteemployee',
    {
        templateUrl: 'EmployeeInfo/DeleteEmployee',
        controller: 'DeleteEmployeeController',
        caseInsensitiveMatch: true
    });
    $routeProvider.when('/showusers',
    {
        templateUrl: 'Users/ShowUsers',
        controller: 'ShowUsersController',
        caseInsensitiveMatch: true
    });

    $routeProvider.when('/showdepartments',
     {
         templateUrl: 'Departments/ShowDepartments',
         controller: 'ShowDepartmentsController',
         caseInsensitiveMatch: true
     });
    $routeProvider.when('/adddepartment',
    {
        templateUrl: 'Departments/AddNewDepartment',
        controller: 'AddDepartmentController',
        caseInsensitiveMatch: true
    });
    $routeProvider.when("/editdepartment",
    {
        templateUrl: 'Departments/EditDepartment',
        controller: 'EditDepartmentController',
        caseInsensitiveMatch: true
    });
    $routeProvider.when('/deletedepartment',
    {
        templateUrl: 'Departments/DeleteDepartment',
        controller: 'DeleteDepartmentController',
        caseInsensitiveMatch: true
    });
    $routeProvider.when('/CreateRole',
  {
      templateUrl: 'Role/Create',
     
      caseInsensitiveMatch: true
  });
    $routeProvider.when('/Role',
 {
     templateUrl: 'Role/Index',
   
     caseInsensitiveMatch: true
 });
    $routeProvider.otherwise(
    {
        redirectTo: '/'
    });
    // $locationProvider.html5Mode(true);
    // $locationProvider.html5Mode(true).hashPrefix('!')
    //$locationprovider.html5mode({
    //    enabled: true,
    //    requirebase: false
    //});
}]);