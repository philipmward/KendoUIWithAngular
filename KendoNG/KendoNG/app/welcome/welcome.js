(function () {
    "use strict";

    angular.module("app").controller("welcome", [welcome]);

    function welcome() {
        var vm = this;

        function activate() {
            vm.computers = [
                { name: "Macbook Pro", id: 1 },
                { name: "Macbook Air", id: 2 },
                { name: "Mac Pro", id: 3 }
            ];
        };

        vm.activate = activate();

        activate();
    };
})();