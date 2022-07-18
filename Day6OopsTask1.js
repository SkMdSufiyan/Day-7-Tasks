// Day-6 OOPS task-1
console.log('------------Day-6 OOPS task-1 given in Day-7 activities------------')
class Movie{
    constructor(title, studio, rating){
        this.title = title;     // title of the movie
        this.studio = studio;   // name of the studio
        if (arguments.length==3){
            this.rating = rating;   // provided rating for thet movie
        }else if(arguments.length<3){
            this.rating = 'PG';   // default rating for thet movie
        }
    }
    getPG(){
        if(this.rating=='PG'){
            return this.title
        }
    }
}

let newMovie = new Movie('Casino Royale', 'Eon Productions', 'PG13');
//console.log(newMovie.getPG())