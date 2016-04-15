app.controller("MyCostCtrl", function($scope,$sce) {
	
	$scope.init = function(){
		$scope.costPerHour = 100.00;
		$scope.numTasks = 0;
		$scope.tasks = [
			                {'name':'Instalación  CMS', 'EO':2,'EMP':4,'EP':5,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Personalizar CMS a las necesidades', 'EO':8,'EMP':12,'EP':17,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Programación CMS para sitio web', 'EO':24,'EMP':32,'EP':40,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Programación de Aplicación', 'EO':24,'EMP':32,'EP':40,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Webservices para la aplicación', 'EO':19,'EMP':25,'EP':34,'pert':0,'desviEstandar':0,'varianza':0}
			               ,{'name':'Preparar aplicación para publicar', 'EO':6,'EMP':8,'EP':10,'pert':0,'desviEstandar':0,'varianza':0}
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
		 $scope.p1 = $scope.pertTotal  + $scope.raiz;
		 $scope.p2 = $scope.pertTotal  + $scope.raiz * 2;
		 $scope.p3 = $scope.pertTotal  + $scope.raiz * 3;
		 
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