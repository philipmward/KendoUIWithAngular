(function () {
    "use strict";

    var app = angular.module("app", ["ngRoute", "kendo.directives"]);

    app.config([
        "$routeProvider", function ($routeProvider) {
            $routeProvider
                .when("/", { templateUrl: "app/welcome/welcome.html" })
                .otherwise({ redirectTo: "/" });
        }
    ]);
})();