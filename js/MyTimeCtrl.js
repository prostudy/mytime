app.controller("MyTimeCtrl", function($scope) {
	$scope.totalHours = 0;
	$scope.totalHoursWeek = 168;
	$scope.totalHoursDay = 24;
	
	$scope.total = 168;
	$scope.totalD = 24;
	
	
	$scope.daysWeek = 7;
	$scope.validHours = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
	
	$scope.sleepCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':[{'hour':0, active:'active'},{'hour':1, active:''},{'hour':2, active:''}
							,{'hour':3, active:''},{'hour':4, active:''},{'hour':5, active:''},{'hour':6, active:''}
							,{'hour':7, active:''},{'hour':8, active:''},{'hour':9, active:''},{'hour':10, active:''}] };
	
	$scope.educationCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':5
							, 'hoursObject':[{'hour':0, active:'active'},{'hour':1, active:''},{'hour':2, active:''}
							,{'hour':3, active:''},{'hour':4, active:''},{'hour':5, active:''},{'hour':6, active:''}
							,{'hour':7, active:''},{'hour':8, active:''},{'hour':9, active:''},{'hour':10, active:''}] };
	
	$scope.healthCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':4
							, 'hoursObject':[{'hour':0, active:'active'},{'hour':1, active:''},{'hour':2, active:''}
							,{'hour':3, active:''},{'hour':4, active:''},{'hour':5, active:''},{'hour':6, active:''}
							,{'hour':7, active:''},{'hour':8, active:''},{'hour':9, active:''},{'hour':10, active:''}] };
					
	$scope.breakfastCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':[{'hour':0, active:'active'},{'hour':1, active:''},{'hour':2, active:''}
							,{'hour':3, active:''},{'hour':4, active:''},{'hour':5, active:''},{'hour':6, active:''}
							,{'hour':7, active:''},{'hour':8, active:''},{'hour':9, active:''},{'hour':10, active:''}] };
	
	$scope.workCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':5
							, 'hoursObject':[{'hour':0, active:'active'},{'hour':1, active:''},{'hour':2, active:''}
							,{'hour':3, active:''},{'hour':4, active:''},{'hour':5, active:''},{'hour':6, active:''}
							,{'hour':7, active:''},{'hour':8, active:''},{'hour':9, active:''},{'hour':10, active:''}] };
	
	
	$scope.familyCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':[{'hour':0, active:'active'},{'hour':1, active:''},{'hour':2, active:''}
							,{'hour':3, active:''},{'hour':4, active:''},{'hour':5, active:''},{'hour':6, active:''}
							,{'hour':7, active:''},{'hour':8, active:''},{'hour':9, active:''},{'hour':10, active:''}] };
	
	
	$scope.transportCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':[{'hour':0, active:'active'},{'hour':1, active:''},{'hour':2, active:''}
							,{'hour':3, active:''},{'hour':4, active:''},{'hour':5, active:''},{'hour':6, active:''}
							,{'hour':7, active:''},{'hour':8, active:''},{'hour':9, active:''},{'hour':10, active:''}] };
					
	
	$scope.mealtimeCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':[{'hour':0, active:'active'},{'hour':1, active:''},{'hour':2, active:''}
							,{'hour':3, active:''},{'hour':4, active:''},{'hour':5, active:''},{'hour':6, active:''}
							,{'hour':7, active:''},{'hour':8, active:''},{'hour':9, active:''},{'hour':10, active:''}] };
	
	$scope.entertainmentCategory = {'hours':0, 'percentage':0,'hoursByWeek':0,'days':7
							, 'hoursObject':[{'hour':0, active:'active'},{'hour':1, active:''},{'hour':2, active:''}
							,{'hour':3, active:''},{'hour':4, active:''},{'hour':5, active:''},{'hour':6, active:''}
							,{'hour':7, active:''},{'hour':8, active:''},{'hour':9, active:''},{'hour':10, active:''}] };
	
	
	
    $scope.performCal = function(categoryObject,hoursByDaySelected){
    	categoryObject.hours = hoursByDaySelected.hour ;  
    	categoryObject.hoursByWeek = categoryObject.days * categoryObject.hours;  
    	categoryObject.percentage = Math.round ( (100 *  categoryObject.hoursByWeek) /  $scope.totalHoursWeek,2);
		$scope.setActiveHour(categoryObject,hoursByDaySelected);
		$scope.setTotal();
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
    };
	
});