console.log('***** Music Collection *****')

// this variable stores the record objects we will create
let collection = [];

// search object for search function
let rayCharlesSearch = {
  artist: 'Ray Charles',
  year: 1957
} // end of Ray Charles Search

// This function adds album objects to the collection array
function addToCollection(title, artist, yearPublished) {
  console.log('in addToCollection');
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } // end of object creation
  collection.push(record);
  return record;
} // end addToCollection

// This function console logs each album's properties from an array
function showCollection(array) {
  console.log('In showCollection');
  console.log(`There are ${array.length} albums in this collection`);
  for (let eachAlbum of array) {
    console.log(`${eachAlbum.title} by ${eachAlbum.artist}, published in ${eachAlbum.yearPublished}`);
  } // end of for loop
} // end of showCollection function

// This function searches an array for all the object with a matching artist property
function findByArtist(artist) {
  let matchingArtists = [];
  console.log(`Searching your collection for ${artist}...`);
  for (i=0; i<collection.length; i++) {
    if (collection[i].artist === artist) {
      console.log('We found a match!!');
      matchingArtists.push(collection[i]);
    } // adds object to array of artist matches
    else {
      console.log(`${artist} does not match ${collection[i].artist}`);
    } // logs message if artist does not match
  } //end of for loop
  return matchingArtists;
} // end findByArtist function

function search(searchCriteria) {
  console.log(`Searching for ${searchCriteria} in your collection.`);
} // end search function

//testing addToCollection
console.log(addToCollection('White Blood Cells', 'The White Stripes', 1999));
console.log(addToCollection('Icky Thump', 'The White Stripes', 2007));
console.log(addToCollection('Oh No', 'OK GO', 2005));
console.log(addToCollection('Led Zeppelin IV', 'Led Zeppelin', 1971));
console.log(addToCollection('There Is Nothing Left To Lose', 'Foo Fighters', 1999));
console.log(addToCollection('Pinkerton', 'Weezer', 1996));

// logging whole collection
console.log(collection);

// test showCollection function
showCollection(collection);

// test findByArtist function
// I reused the showCollection function to display the results of findByArtist
showCollection(findByArtist('The White Stripes'));
showCollection(findByArtist('KE$HA'));
showCollection(findByArtist('Foo Fighters'));

// test search function
console.log(search(rayCharlesSearch));
