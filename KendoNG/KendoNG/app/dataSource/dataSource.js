(function () {
    "use strict";

    function dataSource() {
        var vm = this;

        function activate() {
            vm.gridData = new kendo.data.ObservableArray([
                { feature: "Disk", details: "256 MB" },
                { feature: "RAM", details: "16 GB" },
                { feature: "Monitor", details: "Thunderbolt" }
            ]);

            vm.gridColumns = [
                { field: "feature", title: "Feature" },
                { field: "details", title: "Details" }
            ];

            vm.update = function () {
                vm.gridData[0].set("details", "1TB");
            };
        };

        vm.activate = activate;
        activate();
    };

    angular.module("app").controller("dataSource", [dataSource]);
})();