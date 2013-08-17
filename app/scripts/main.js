angular.module('demoApp', []);

var MainController = (function () {
    function MainController($scope) {
        this.count = 52;
        this.message = 'Maurizio';
        $scope.vm = this;
        $scope.show = true;
    }
    MainController.prototype.inc = function () {
        this.count++;
    };
    MainController.prototype.dec = function () {
        this.count--;
    };
    MainController.$inject = ['$scope'];
    return MainController;
})();
//# sourceMappingURL=main.js.map
