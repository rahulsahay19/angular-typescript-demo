/**
 * Created by Rahul_Sahay on 8/25/2015.
 */
var movie = (function () {
    function movie(directorName, movieName, releaseYear, noOfReviews) {
        //define the props
        this.directorName = directorName;
        this.movieName = movieName;
        this.releaseYear = releaseYear;
        this.noOfReviews = noOfReviews;
    }
    return movie;
})();
var mov = new movie('James Cameron', 'Avatar', '1997', '200');
console.log(mov);
