var glb=angular.module('aaa',[]);
glb.controller('myCtrl',['$scope',function($scope){
	 $scope.name = "dreamapple";
    $scope.age = 20;
    $scope.positionName='android';
   // $scope.sex='mr.man';
    $scope.ceod='dfjsdofj';
   /* $scope.sex='woman';*/
    $scope.changeAge = function(){
        $scope.age = 22;
        $scope.sex='man';
    }
    $scope.changeName = function(){
        		$scope.name="老帅哥";
        	}
}])
.controller('supermanCtrl',['$scope',function($scope){
	
}]);
