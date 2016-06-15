(function(){
   "user strict";
   _controller = function(){
       var _t=this;
       _t.$routerOnActivate=function(next,previous){
           console.log(next);
           _t.id = next.params.id;
       }
   }
   angular.module('app') 
   .component("movieDetails",{       
       templateUrl:"app/movie-details.component.html",
       $canActivate:function($timeout){
           return $timeout(function(){
               return true; // create a promise to validate the route activation (dummy call with timeout)
           },300);
       },
       controllerAs:"vm",
       controller:_controller
   })
}())