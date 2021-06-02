console.log('***** Music Collection *****')

// this variable stores the record objects we will create
let collection = [];

// search objects for search function
let rayCharlesSearch = {
  artist: 'Ray Charles',
  year: 1957
}

let stripesSearch2007 = {
  artist: 'The White Stripes',
  year: 2007
}

let fooSearch = {
  artist: 'Foo Fighters',
  year: 1999
}

let emptySearchObject = {

}

// Track list arrays for track objects
let whiteBloodCellsTracks = [];
let ickyThumpTracks =[];
let ohNoTracks = [];
let ledZeppelinIVTracks = [];
let thereIsNothingLeftToLoseTracks = [];
let pinkertonTracks = [];
// End of track list arrays

// function to add tracks info to track arrays
function addTracks (trackArrayName, trackName, trackDuration) {
  let trackInfo = {
    name: trackName,
    duration: trackDuration
  }
  trackArrayName.push(trackInfo)
} // end addTracks function

// This function adds album objects to the collection array
function addToCollection(title, artist, yearPublished, trackArray) {
  console.log('in addToCollection');
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: trackArray
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
    for (i=0; i<eachAlbum.tracks.length; i++) {
      console.log(`   ${i+1}. ${eachAlbum.tracks[i].name}: ${eachAlbum.tracks[i].duration}`);
    } // loops through and logs all tracks+duration
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
  if (searchCriteria === undefined) {
    return collection;
  } // end function if searchCriteria is empty
  else if (searchCriteria.artist === undefined || searchCriteria.year === undefined) {
    return collection;
  } // end function if searchCriteria is an empty object
  console.log(`Searching for artist: ${searchCriteria.artist}, year: ${searchCriteria.year} in your collection.`);
  let searchArray = [];
  for (i=0; i<collection.length; i++) {
    if (searchCriteria.artist === collection[i].artist && searchCriteria.year === collection[i].yearPublished) {
      console.log('We have a match!');
      searchArray.push(collection[i]);
    } // end if either criteria matches
    else {
      console.log(`No album matching artist: ${searchCriteria.artist}, year: ${searchCriteria.year} has been found.`);;
    } // end of else if criteria doesn't match this album
  } // end of for loop
  return searchArray;
} // end search function

// adds track info to track arrays
addTracks(whiteBloodCellsTracks, 'Dead Leaves and the Dirty Ground', '3:05');
addTracks(whiteBloodCellsTracks, 'Hotel Yorba', '2:10');
addTracks(whiteBloodCellsTracks, 'I\'m Finding It Harder To Be a Gentleman' , '2:54');
addTracks(ickyThumpTracks, 'Icky Thump', '4:15');
addTracks(ickyThumpTracks, 'You Don\'t Know What Love Is (You Just Do As You\'re Told)', '3:55' );
addTracks(ickyThumpTracks, '300 M.P.H. Torrential Outpour Blues', '5:29');
addTracks(ohNoTracks, 'Invincible', '3:31');
addTracks(ohNoTracks, 'Do What You Want', '3:06');
addTracks(ohNoTracks, 'Here It Goes Again', '3:00');
addTracks(ledZeppelinIVTracks, 'Black Dog', '4:56');
addTracks(ledZeppelinIVTracks, 'Rock and Roll', '3:41');
addTracks(ledZeppelinIVTracks, 'The Battle of Evermore', '5:52');
addTracks(thereIsNothingLeftToLoseTracks, 'Stacked Actors', '4:16');
addTracks(thereIsNothingLeftToLoseTracks, 'Breakout', '3:21');
addTracks(thereIsNothingLeftToLoseTracks, 'Learn To Fly', '3:56');
addTracks(pinkertonTracks, 'Tired of Sex', '3:01');
addTracks(pinkertonTracks, 'Getchoo', '2:53');
addTracks(pinkertonTracks, 'No Other One', '2:08');

//testing addToCollection
console.log(addToCollection('White Blood Cells', 'The White Stripes', 1999, whiteBloodCellsTracks));
console.log(addToCollection('Icky Thump', 'The White Stripes', 2007, ickyThumpTracks));
console.log(addToCollection('Oh No', 'OK GO', 2005, ohNoTracks));
console.log(addToCollection('Led Zeppelin IV', 'Led Zeppelin', 1971, ledZeppelinIVTracks));
console.log(addToCollection('There Is Nothing Left To Lose', 'Foo Fighters', 1999, thereIsNothingLeftToLoseTracks));
console.log(addToCollection('Pinkerton', 'Weezer', 1996, pinkertonTracks));

// adding Ray Charles album to test search function
// console.log(addToCollection('Ray Charles', 'Ray Charles', 1957));

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
console.log(search(stripesSearch2007));
console.log(search(fooSearch));

// test empty searchCriteria
console.log(search());
console.log(search(emptySearchObject));
