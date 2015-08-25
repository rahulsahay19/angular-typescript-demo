/**
 * Created by Rahul_Sahay on 8/25/2015.
 */

interface IMoviesModel {
    movieName:string;
    directorName:string;
    releaseYear:number;
    noOfReviews:number;
}

class moviesCtrl implements IMoviesModel {
    movieName:string;
    directorName:string;
    releaseYear:number;
    noOfReviews:number;

constructor() {
    this.movieName = "Avatar";
    this.directorName = "James Cameron";
    this.releaseYear = 1997,
    this.noOfReviews = 200
    }
}

//Registering the controller with the module
angular.module("app").controller("moviesCtrl",moviesCtrl);