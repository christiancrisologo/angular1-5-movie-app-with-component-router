(function () {
   "user strict";

   movieService=function($http){
       return $http.get("api/movies.json")
                .then(function(response){
                    console.dir(response);
                    return response.data;
                })
   } 
   
   

   _controller=function($http){

       var _t = this;        
        _t.$onInit=function(){
           movieService($http).then(function(movies){
               _t.movies=movies;
               console.dir(movies);
           })
        }

        _t.goTo = function(id){
            _t.$router.navigate(["Details",{id:id}]);
        }

   } 
   
   angular.module('app')   
   .component('movieList',{   
       bindings:{
         "$router":"<"  
       },
       templateUrl:"app/movie-list.component.html",
       controllerAs:'vm',
       controller:["$http",_controller]

    })
}())