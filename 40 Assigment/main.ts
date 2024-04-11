 // Define the make_album function
function make_album(artists_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
      artist: artists_name, 
      title: album_title,
      };

  if (tracks !== undefined){
    album. tracks = tracks;
  }

  return album;

}

// Calling three function and creating 03 variables with different values

 let album01 = make_album("M.Danish", "Album title 01"); 

  let album02 = make_album("M.Rayyan", "Album title 02");

 // calling a make album function with third paremeter
  let album03 = make_album("Ali", "Album title 03", 10);

 // print  the variables

 console.log(album01);
 console.log(album02);
 console.log(album03);  
