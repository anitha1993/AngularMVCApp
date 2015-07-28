app.factory("LoginFactory", function ($http, $q) {

    return function (username, password, rememberMe) {

        var deferredObject = $q.defer();

        $http.post(
            '/Account/Login', {
                UserName: username,
              //  Email: emailAddress,
                Password: password,
                RememberMe: rememberMe
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

