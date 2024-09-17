/***************************************
 * Media class
 * parent to Book, Movie, and CD
 */
class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(status) {
      this._isCheckedOut = status;
    }
    toggleCheckOutStatus() {
      if(this.isCheckedOut) {
        this.isCheckedOut(false);
      } else {
        this.isCheckedOut(true);
      }
    }
    getAverageRating(){
      let ratings_sum = this.ratings.reduce((currSum, rating) => currentSum + rating, 0);
      let ratings_avg = ratings_sum / this.ratings.length;
      return ratings_avg;
    }
    addRating(rating) {
      this.ratings.push(rating);
    }
}

/***************************************
 * Book class
 * extends Media
 * inherits properties: title, isCheckedOut, ratings
 * inherits getters: title, isCheckedOut, ratings
 * inherits setters: isCheckedOut
 * inherits methods: toggleCheckOutStatus, getAverageRating, addRating
 * properties: author, pages
 * methods: getters
 */
class Book extends Media {
    constructor(title, author, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}


/***************************************
 * Movie class
 * extends Media
 * inherits properties: title, isCheckedOut, ratings
 * inherits getters: title, isCheckedOut, ratings
 * inherits setters: isCheckedOut
 * inherits methods: toggleCheckOutStatus, getAverageRating, addRating
 * properties: director, runTime
 * methods: getters
 */
class Movie extends Media {
    constructor(title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

/***************************************
 * CD class
 * extends Media
 * inherits properties: title, isCheckedOut, ratings
 * inherits getters: title, isCheckedOut, ratings
 * inherits setters: isCheckedOut
 * inherits methods: toggleCheckOutStatus, getAverageRating, addRating
 * properties: artist, songs
 * methods: getters
 */
class Movie extends Media {
    constructor(title, artist, songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
}