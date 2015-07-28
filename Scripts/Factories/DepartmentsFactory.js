var DepartmentsFactory = function ($http) {
 
    var fac = {};
    fac.GetDepartmentsList = function () {
        return $http.get('/Account/GetDepartmentsList')
    }
    return fac;
}
