/**
 * Created by Rahul_Sahay on 8/25/2015.
 */
var moviesCtrl = (function () {
    function moviesCtrl() {
        this.movieName = "Avatar";
        this.directorName = "James Cameron";
        this.releaseYear = 1997,
            this.noOfReviews = 200;
    }
    return moviesCtrl;
})();
//Registering the controller with the module
angular.module("app").controller("moviesCtrl", moviesCtrl);
