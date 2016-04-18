app.controller("MyCostCtrl", function($scope,$sce) {
	
	$scope.init = function(){
		$scope.costPerHour = 30.00;
		$scope.title = 'Mobile app'
		$scope.numTasks = 0;
		$scope.tasks = [
			               {'name':'Login screen', 'EO':8,'EMP':12,'EP':17,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Personal profile screen', 'EO':24,'EMP':32,'EP':40,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Rate and review screen', 'EO':24,'EMP':32,'EP':40,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Connect with your website', 'EO':19,'EMP':25,'EP':34,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Design', 'EO':6,'EMP':8,'EP':10,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Create icon', 'EO':6,'EMP':8,'EP':10,'pert':0,'desviEstandar':0,'varianza':0}
						];	 
		$scope.updatePert();
	};
	
	$scope.updatePert = function(){
		$scope.pertTotal = 0;
		$scope.varianzaTotal = 0;
		$scope.raiz = 0;
		$scope.totalCost = 0;
		
		 for(i=0;i< $scope.tasks.length;i++){
			 	$scope.updatePertByTask($scope.tasks[i]);
				$scope.pertTotal +=  $scope.tasks[i].pert;
				$scope.varianzaTotal +=  $scope.tasks[i].varianza;
			}
		 
		 $scope.raiz = Math.sqrt( $scope.varianzaTotal );
		 $scope.p1 = Math.round ($scope.pertTotal  + $scope.raiz,2);
		 $scope.p2 = Math.round ($scope.pertTotal  + $scope.raiz * 2,2);
		 $scope.p3 = Math.round ($scope.pertTotal  + $scope.raiz * 3,2);
		 
		 $scope.totalCost =  Math.round ( $scope.p3 * $scope.costPerHour,2 );
	 };
	
	$scope.updatePertByTask = function(task) {
		task.pert = (task.EO + 4 * task.EMP + task.EP) / 6;
		task.desviEstandar =  (task.EP -  task.EO ) / 6;
		task.varianza = task.desviEstandar * task.desviEstandar; 
	 };
	 
	 
	 $scope.addTask = function() {
		    $scope.tasks.push({'name':'', 'EO':0,'EMP':0,'EP':0,'pert':0,'desviEstandar':0,'varianza':0});
		    $scope.counter++;
	};
	
	$scope.removeTask = function(task) { 
		  var index = $scope.tasks.indexOf(task);
		  $scope.tasks.splice(index, 1);  
		  $scope.updatePert();
		}
		
	
    $scope.init();
});