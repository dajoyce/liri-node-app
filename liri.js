require("dotenv").config();
var fs = require("fs");
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var Command = process.argv[2];
var Search = process.argv[3];

if (Command === "spotify-this-song") {
  doSpotify();
} else if (Command === "concert-this") {
  doBandInTown();
} else if (Command === "movie-this") {
  doOMDB();
} else if (Command === "do-what-it-says") {
  doDWIS();
}

//Spotify Function
function doSpotify() {
  spotify.search({ type: "track", query: Search }, function(err, data) {
    if (err) {
      console.log("Error occurred: " + err);
      return;
    }
    for (var i = 0; i < data.tracks.items.length; i++) {
      var song = data.tracks.items[i].name;
      var album = data.tracks.items[i].album.name;
      var preview = data.tracks.items[i].preview_url;
      var artists = [];
      for (var j = 0; j < data.tracks.items[i].artists.length; j++) {
        var artist = data.tracks.items[i].artists[j].name;
        artists.push(artist);
      }
      console.log("NAME: " + song + "\nALBUM NAME: " + album + "\nARTIST: " + artists + "\nSONG PREVIEW: " + preview);
      console.log("-----------------------------------");
    }
  });
}

//Bands In Town Function
function doBandInTown() {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" + Search + "/events?app_id=%3Fapp_id%3Db7b374713cf3e2cf710b82eac648971e"
    )
    .then(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        console.log("Artist/Band you choose is: " + Search);
        console.log("Venue is located in: " + response.data[i].venue.name);
        console.log("Venue is located in: " + response.data[i].venue.city);
        console.log("Date/Time is: " + response.data[i].datetime);
        console.log("-----------------------------------");
      }
    });
}

// Date of the Event (use moment to format this as "MM/DD/YYYY")

//OMDB Function
function doOMDB() {
  axios.get("http://www.omdbapi.com/?t=" + Search + "&y=&plot=short&apikey=trilogy").then(function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMBD Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatos: " + response.data.Ratings[1].Value);
    console.log("Country Produced in: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    console.log("-----------------------------------");
  });
}
// Do-What-It-Says Function
function doDWIS() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);

    var dataArr = data.split(",");

    if (dataArr.length == 2) {
      Command = dataArr[0];
      Search = dataArr[1];
      doSpotify();
    }
  });
}
