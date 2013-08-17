declare var angular;

angular.module('demoApp',[]);

interface IMainController {
	count: number;
	message: string;
	inc: ()=>void;
	dec: ()=>void;
}

class MainController implements IMainController {

	count = 52;
	message = 'Maurizio';

	static $inject = ['$scope'];
	constructor($scope) {
		$scope.vm = this;
		$scope.show = true;
	}

	inc() {
		this.count++;
	}
	dec() {
		this.count--;
	}
}