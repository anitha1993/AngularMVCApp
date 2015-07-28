var LoginFactory = function ($http) {


    //Create new record
    this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: "/Account",
            data: Employee
        });
        return request;
    }
    //Get Single Records
    this.get = function (Id) {
        return $http.get("/api/EmployeesAPI/" + Id);
    }

    //Get All Employees
    this.getEmployees = function () {
        return $http.get("/api/EmployeesAPI");
    }


    ////Update the Record
    //this.put = function (Id, Employee) {
    //    var request = $http({
    //        method: "put",
    //        url: "/api/EmployeesAPI/" + Id,
    //        data: Employee
    //    });
    //    return request;
    //}
    ////Delete the Record
    //this.delete = function (Id) {
    //    var request = $http({
    //        method: "delete",
    //        url: "/api/EmployeesAPI/" + Id
    //    });
    //    return request;
    //}
}