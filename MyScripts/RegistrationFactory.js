app.factory("RegistrationFactory", function ($http, $q) {

    return function (username, emailAddress, roleName, roleId) {  //roleId, departments
        console.log(roleName + " || " + roleId);
        var deferredObject = $q.defer();

        $http.post(
            '/Account/Register', {
                UserName: username,
                Email: emailAddress,
                //Department_Id: departments,
                Name: roleName,
                Id: roleId
            }
        ).
        success(function (data) {
            if (data == "True") {
                deferredObject.resolve({ success: true });
            } else {
                deferredObject.resolve({ success: false });
            }
        }).
        error(function () {
            deferredObject.resolve({ success: false });
        });
        return deferredObject.promise;
    }
});

