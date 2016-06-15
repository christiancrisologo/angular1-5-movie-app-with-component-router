(function(){
    "user strict";
    
    _controller=function(){
        var _t=this;

        _t.$onInit=function(){
            //_t.headerTitle=_t.title;    
            console.dir(_t.menus);        
        }
    }
    
    angular.module("app")
    .component("navComponent",{
        bindings:{
              title:"<",
              menus:"="
        },
        templateUrl:"app/nav.component.html",
        controllerAs:"vm",
        controller:_controller
    })
    
}())