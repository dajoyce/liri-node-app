# liri-node-app

General Overview:
This app was created during week 10 of the UNC Coding Bootcamp. The homework called for the creation of an app named LIRI (kind of like SIRI). LIRI is a Language Interpretation and Recognition Interface. LIRI works as a command line node app that takes in parameters inputed by the user and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. LIRI will also utilize the `fs` Node package, and then LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands (more about this below).

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

Before you get started:
Unlike our other homeworks up to this point, this is a CLI App and it cannot be deployed using GitHub or Heroku. If you choose download this, navigate to the location on your computer and remember to do the npm init and npm install before moving forward. The basic command instructions are listed below and I am also including the following short video which demonstrates LIRI completing the tasks described above in the General Overview section.

Video Link: https://drive.google.com/file/d/1qT8PmdwwFHcRIKQnXUoSo0SylXr15Lsc/view

App Basic Command Instructions:

1.  Navigate to the appropriate folder where you downloaded the app and completed the npm init and npm install.
2.  To use the Spotify feature, type "node liri.js" then "spotify-this-song" and then enter "the name of the song you wish to search"
    ex. In the short video above I typed node liri.js spotify-this song Africa, it returns about 20 songs with Africa in the title, I was looking for either the Toto or the Weezer version, it gives you the name of the song, album it appears on name, the artist name, and a preview link to the song (if available).
3.  To use the Bands in Town feature, type "node liri.js" then "concert-this" and then enter "the artist/band you wish to search"
    ex. in the short video above I typed node liri.js concert-this Weezer, it returns several upcoming shows and gives you the venue name, venue location and date and time of the show.
4.  To use the OMDB feature, type " "node liri.js" then "movie-this" and then enter "the name of the movie you wish to search"
    ex. In the short video above I typed node liri.js movie-this Batman, it returned Tim Burton's 1989 classic and gave you the movie title, the year the movie came out, the IMDB rating of the movie, the Rotten Tomatoes rating of the movie, the country where the movie was produced, the language of the movie, the lot of the movie and the actors in the movie.
5.  To use the Do What It Says feature, type "node liri.js" and then "do-what-it-says", this will return whatever information is listed in the random.txt file and the results will follow one of the above descriptions for Spotify, Bands in Town or OMDB.
