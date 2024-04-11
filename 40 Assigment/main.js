// Define the make_album function
function make_album(artists_name, album_title, tracks) {
    var album = {
        artist: artists_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three function and creating 03 variables with different values
var album01 = make_album("M.Danish", "Album title 01");
var album02 = make_album("M.Rayyan", "Album title 02");
// calling a make album function with third paremeter
var album03 = make_album("Ali", "Album title 03", 10);
// print  the variables
console.log(album01);
console.log(album02);
console.log(album03);
