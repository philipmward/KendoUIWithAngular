(function () {
    "use strict";

    angular.module("app").controller("welcome3", [welcome3]);

    function welcome3() {
        var vm = this;
        vm.computerChosen = false;
        vm.selectedComputer = "";
        var defaultComputerOption="Select a computer...";

        function activate() {
            vm.computerOptions = {
                dataSource: {
                    data: [
                        { name: "Macbook Pro", id: 1 },
                        { name: "Macbook Air", id: 2 },
                        { name: "Mac Pro", id: 3 }
                    ]
                },
                dataTextField: "name",
                dataValueField: "id",
                optionLabel: defaultComputerOption
            };

            vm.computerChange=function(e) {
                console.log(e.sender.text());
                vm.computerChosen = e.sender.text() !== defaultComputerOption;
                vm.selectedComputer = e.sender.text();
            }
        };

        vm.activate = activate();

        activate();
    };
})();