app.controller("MyTimeCtrl", function($scope,$sce) {
	 $scope.daysAWeek = [
			                {model : "1 day a week", color : 1},
			                {model : "2 days a week", color : 2},
			                {model : "3 days a week", color : 3},
			                {model : "4 days a week", color : 4},
			                {model : "5 days a week", color : 5},
			                {model : "6 days a week", color : 6},
			                {model : "7 days a week", color : 7},
			            ];	
	 
	 $scope.hoursPerDay = [
							 {'label':'0 hrs', 'hour':0, active:'active'},{'label':'30 min','hour':.5, active:''}
							,{'label':'1 hr.','hour':1, active:''},{'label':'1:30 hrs','hour':1.5, active:''}
							,{'label':'2 hrs.','hour':2, active:''},{'label':'2:30 hrs.','hour':2.5, active:''}
							,{'label':'3 hrs.','hour':3, active:''},{'label':'3:30 hrs.','hour':3.5, active:''}
							,{'label':'4 hrs.','hour':4, active:''},{'label':'4:30 hrs.','hour':4.5, active:''}
							,{'label':'5 hrs.','hour':5, active:''},{'label':'5:30 hrs.','hour':5.5, active:''}
							,{'label':'6 hrs.','hour':6, active:''},{'label':'6:30 hrs.','hour':6.5, active:''}
							,{'label':'7 hrs.','hour':7, active:''},{'label':'7:30 hrs.','hour':7.5, active:''}
							,{'label':'8 hrs.','hour':8, active:''},{'label':'8:30 hrs.','hour':8.5, active:''}
							,{'label':'9 hrs.','hour':9, active:''},{'label':'9:30 hrs.','hour':9.5, active:''}
							,{'label':'10 hrs.','hour':10, active:''},{'label':'10:30 hrs.','hour':10.5, active:''}
							,{'label':'11 hrs.','hour':11, active:''},{'label':'11:30 hrs.','hour':11.5, active:''}
							,{'label':'12 hrs.','hour':12, active:''},{'label':'12:30 hrs.','hour':12.5, active:''}
						];
	 
	 
	 
	$scope.init = function(){
		$scope.totalHours = 0;
		$scope.totalHoursWeek = 168;
		$scope.totalHoursDay = 24;
		
		$scope.total = 168;
		$scope.totalD = 24;
		
		
		$scope.daysWeek = 7;
		$scope.validHours = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
	    
		

		$scope.classDisabled = '';
		$scope.showAlert = 'notShowAlert';
		$scope.alertMessage = '';
		$scope.successOrDanger = 'success';

	
	$scope.sleepCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':$scope.hoursPerDay};
	
	$scope.educationCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':5
							, 'hoursObject':$scope.hoursPerDay};
	
	
	$scope.healthCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':4
							, 'hoursObject':$scope.hoursPerDay};
					
	$scope.breakfastCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':$scope.hoursPerDay};
	
	$scope.workCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':5
							, 'hoursObject':$scope.hoursPerDay};
	
	
	$scope.familyCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':$scope.hoursPerDay};
	
	
	$scope.transportCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':$scope.hoursPerDay};
					
	
	$scope.mealtimeCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':$scope.hoursPerDay};
	
	$scope.entertainmentCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':$scope.hoursPerDay};
	
	};
	
    $scope.performCal = function(categoryObject,hoursByDaySelected){
    	if($scope.classDisabled != 'disabled'){
    		//categoryObject.days = selectedDays;
	    	categoryObject.hours = hoursByDaySelected.hour ;  
	    	categoryObject.hoursByWeek = categoryObject.days * categoryObject.hours;  
	    	categoryObject.percentage = Math.round ( (100 *  categoryObject.hoursByWeek) /  $scope.totalHoursWeek,2);
			$scope.setActiveHour(categoryObject,hoursByDaySelected);
			$scope.setTotal();
    	}
    };
    
    $scope.setActiveHour = function(categoryObject,hoursByDaySelected){
    	for(i=0; i< categoryObject.hoursObject.length; i++){
    		if(categoryObject.hoursObject[i].hour == hoursByDaySelected.hour ){
    			categoryObject.hoursObject[i].active = 'active';
    		}else{
    			categoryObject.hoursObject[i].active = '';
    		}		
    	} 
    };
    
    
    $scope.setTotal = function() {
    	$scope.total =  $scope.totalHoursWeek - 	
    			($scope.sleepCategory.hoursByWeek + $scope.educationCategory.hoursByWeek + $scope.healthCategory.hoursByWeek 
    			+ $scope.breakfastCategory.hoursByWeek + $scope.workCategory.hoursByWeek	+ $scope.familyCategory.hoursByWeek	
    			+ $scope.transportCategory.hoursByWeek + $scope.mealtimeCategory.hoursByWeek + $scope.entertainmentCategory.hoursByWeek);
    	
    	$scope.totalD =  $scope.totalHoursDay - 	
		($scope.sleepCategory.hours + $scope.educationCategory.hours + $scope.healthCategory.hours 
		+ $scope.breakfastCategory.hours + $scope.workCategory.hours	+ $scope.familyCategory.hours	
		+ $scope.transportCategory.hours + $scope.mealtimeCategory.hours + $scope.entertainmentCategory.hours);
    	
    	if($scope.totalD < 0 || $scope.total < 0){
    		//$scope.classDisabled = 'disabled';
    		$scope.successOrDanger = 'danger';
    		$scope.showAlert = 'showAlert';
    		$scope.alertMessage = $sce.trustAsHtml('<strong>Oh snap!</strong> Change a few things up and try again.<br>You no longer have available hours in the day');    		
        }else if($scope.totalD == 0 || $scope.total == 0){
        	$scope.successOrDanger = 'info';
        	$scope.showAlert = 'showAlert';
        	$scope.alertMessage = $sce.trustAsHtml('<strong>Heads up!</strong> Your day is completed.<br>You have available <strong>'+ $scope.total + ' hours a week</strong> to create something new.');
        }else{
        	//$scope.showAlert = 'notShowAlert';
        	$scope.successOrDanger = 'success';
        	$scope.showAlert = 'showAlert';
        	$scope.alertMessage = $sce.trustAsHtml('<strong>Well done!</strong> You still have <strong>'+$scope.totalD+' hours</strong> in a day and <strong>'+ $scope.total + ' hours</strong> in a week.');
        }
        
    };
    
    $scope.test = function(categoryObject,selectedDays){
    	if($scope.classDisabled != 'disabled'){
    		categoryObject.days = selectedDays;
	    	//categoryObject.hours = categoryObject.hours ;  
	    	categoryObject.hoursByWeek = categoryObject.days * categoryObject.hours;  
	    	categoryObject.percentage = Math.round ( (100 *  categoryObject.hoursByWeek) /  $scope.totalHoursWeek,2);
			//$scope.setActiveHour(categoryObject,hoursByDaySelected);
			$scope.setTotal();
    	}
    };
    $scope.init();
	
});