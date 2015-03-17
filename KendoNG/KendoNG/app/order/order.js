(function () {
    "use strict";

    function order($timeout) {
        var vm = this;
        vm.comments = "";
        vm.status = "Ready";
        vm.statusLabels = [
            "Validating order",
            "Validating credit",
            "Checking inventory",
            "Creating work order",
            "Finalizing work order",
            "Order entered"
        ];
        vm.orderProgress = 0;

        var counter = 0;
        function runProgressBar() {
            counter += 5;
            vm.orderProgress = vm.statusLabels[Math.floor(counter / 20)];
            $timeout(runProgressBar, 400);
        };
        vm.runProgressBar = runProgressBar;

        function submitOrderClick() {
            runProgressBar();
        };
        vm.submitOrderClick = submitOrderClick;

        function activate() {
            vm.computerOptions = {
                dataSource: {
                    data: [
                        { name: "MacBook", id: 1001 },
                        { name: "MacBook Pro", id: 1010 },
                        { name: "Mac Mini", id: 2001 },
                        { name: "Mac Pro", id: 4010 },
                        { name: "iMac", id: 4050 }
                    ]
                },
                dataTextField: "name",
                dataValueField: "id",
                optionLabel: "Select a model..."
            };

            vm.ramOptions = {
                min: 4,
                max: 32,
                smallStep: 4,
                largeStep: 4,
                orientation: "horizontal",
                value: "8"
            };

            vm.selectOptions = {
                placeholder: "Select options...",
                dataTextField: "ProductName",
                dataValueField: "ProductID",
                autoBind: false,
                dataSource: {
                    type: "oData",
                    serviceFiltering: true,
                    transport: {
                        read: {
                            url: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
                        }
                    }
                }
            };

            vm.deliveryDatePickerOptions = {
                format: "MM/dd",
                start: "month",
                value: new Date(2015, 0, 10),
                change: "notification1.show('Date verified', 'error')"
            };
        };

        this.activate = activate;

        activate();
    };

    angular.module("app").controller("order", ["$timeout", order]);
})();