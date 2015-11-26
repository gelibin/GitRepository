
glb.directive('hello',function(){//指令与控制器间交互
	 var obj = {
        restrict: "AE",
        scope: {
            name: '@myName',
            aged: '=ages',
            sexd:'=sexs',
            ceo:'=positions',
            changeAge: '&changeMyAge',
            changeName:'&changeMyName',
            result:'=',
            color:'=attrColor'
            
        },
        replace: true,
       	template: "<div>" +
            "<h3>下面部分是我们创建的指令生成的</h3>" +
            "<span ng-bind='color' ></span>"+
            "<textarea result='result' id='result'></textarea><br/>"+
            "我的名字是：<span ng-bind='name'></span><br/>" +
           /* "我的年龄是：<span ng-bind='age'></span><br/>" +*/
            "我的年龄是：<input ng-model='aged'></input><br/>" +
            "我的性别是：<span ng-bind='sexss'></span><br/>" +
            "我的职位是：<span ng-bind='ceo'></span><br/>" +
            "我的性别是：<input type='text' ng-model='sexss'></input><br/>" +
             "我的职位是：<input ng-model='ceo'></input><br/>" +
            "在这里修改名字：<input type='text' ng-model='name'><br/>" +
            "<button ng-click='changeAge()'>修改年龄</button><br/>" +
            "<button ng-click='changeName()'>修改名字</button>" +
            " </div>",
         link: function(scope,elem,attr){
         	/*document.getElementById('result').innerHTML="显示测试结果222222";*/
         	scope.aged ="注入进来的显示内容";
         }
            
    }
    return obj;
})
.directive('superman',function(){//指令间交互
	return{
		restrict:'AE',
		scope:{},
		replace:true,
		controller:function($scope){//用this关键字实现对外暴露，以便被调用
			$scope.params=[];
			this.strong=function(){
				$scope.params.push("strong");
			}
			this.power=function(){
				$scope.params.push("power");
			}
			this.light=function(){
				$scope.params.push("light");
			}
		},
		link:function(scope,ele,att){
			ele.bind("mouseenter",function(){
				console.log(scope.params);
			});
		}
	}
}).directive('strong',function(){
	return{
		require:'^?superman',
		link:function(scope,ele,att,supermanCon){
			supermanCon.strong();
		}
	}
}).directive('power',function(){
	return{
		require:'^?superman',
		link:function(scope,ele,att,supermanCon){
			supermanCon.power();
		}
	}
}).directive('light',function(){
	return{
		require:'^?superman',
		link:function(scope,ele,att,supermanCon){
			supermanCon.light();
		}
	}
})
