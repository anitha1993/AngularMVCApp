app.service("SinglePageCRUDService", function ($http) {

    //Function to Read All Employees
    this.getEmployees = function () {
        return $http.get("api/EmployeeInfoAPI/GetEmployeeInfo");
    };

    //Fundction to Read Employee based upon id
    this.getEmployee = function (id) {
        return $http.get("api/EmployeeInfoAPI/GetEmployeeInfo/" + id);
    };

    //Function to create new Employee
    this.emppost = function (Employee) {
        var request = $http({
            method: "post",
            url: "api/EmployeeInfoAPI/PostEmployeeInfo",
            data: Employee
        });
        return request;
    };
    //Function  to Edit Employee based upon id 
    this.empput = function (id, Employee) {
        var request = $http({
            method: "put",
            url: "api/EmployeeInfoAPI/GetEmployeeInfo/" + id,
            data: Employee
        });
        return request;
    };

    //Function to Delete Employee based upon id
    this.empdelete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeeInfoAPI/GetEmployeeInfo/" + id
        });
        return request;
    };

    //Function to Read All Users
    this.getUsers = function () {
        return $http.get("api/UsersAPI/GetApplicationUser");
    };

    //Fundction to Read User based upon id
    this.getUser = function (id) {
        return $http.get("api/UsersAPI/GetApplicationUser/" + id);
    };

    //Function to create new User
    this.userpost = function (User) {
        var request = $http({
            method: "post",
            url: "api/UsersAPI/GetApplicationUser",
            // data: JSON.stringify(User),
            data: User
        });
        return request;
    };
    //Function  to Edit User based upon id 
    this.userput = function (id, User) {
        var request = $http({
            method: "put",
            url: "api/UsersAPI/GetApplicationUser/" + id,
            data: User
        });
        return request;
    };

    //Function to Delete User based upon id
    this.userdelete = function (id) {
        var request = $http({
            method: "delete",
            url: "api/UsersAPI/GetApplicationUser/" + id
        });
        return request;
    };


    //Function to Read All Departments
    this.getDepartments = function () {
        return $http.get("api/DepartmentsAPI/GetDepartments");
    };

    //Fundction to Read Department based upon id
    this.getDepartment = function (id) {
        return $http.get("api/DepartmentsAPI/GetDepartments/" + id);
    };

    //Function to create new Department
    this.deptpost = function (Department) {
        var request = $http({
            method: "post",
            url: "api/DepartmentsAPI/PostDepartments",
            data: Department
        });
        return request;
    };
    //Function  to Edit Department based upon id 
    this.deptput = function (id, Department) {
        var request = $http({
            method: "put",
            url: "api/DepartmentsAPI/GetDepartments/" + id,
            data: Department
        });
        return request;
    };

    //Function to Delete Department based upon id
    this.deptdelete = function (id) {
        var request = $http({
            method: "delete",
            url: "api/DepartmentsAPI/GetDepartments/" + id
        });
        return request;
    };

});
