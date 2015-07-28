var SinglePageCRUDFactory = function ($http, $q) {
    //Function to Read All Employees
    var deferredObject = $q.defer();
    this.getEmployees = function () {
        return $http.get("api/EmployeeInfoAPI/GetEmployeeInfo");
    };

    //Fundction to Read Employee based upon id
    this.getEmployee = function (id) {
        return $http.get("api/EmployeeInfoAPI/GetEmployeeInfo/" + id);
    };
    //Function to create new Employee
    this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: "api/EmployeeInfoAPI/GetEmployeeInfo",
            data: Employee
        });
        return request;
    };
    //Function  to Edit Employee based upon id 
    this.put = function (id, Employee) {
        var request = $http({
            method: "put",
            url: "api/EmployeeInfoAPI/GetEmployeeInfo/" + id,
            data: Employee
        });
        return request;
    };
   //Function to Delete Employee based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "api/EmployeeInfoAPI/GetEmployeeInfo/" + id
        });
        return request;
    };
};
SinglePageCRUDFactory.$inject = ['$http'];