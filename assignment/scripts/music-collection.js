console.log('***** Music Collection *****')

// this variable stores the record objects we will create
let collection = [];

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

function showCollection(array) {
  console.log('In showCollection');
  console.log(`There are ${array.length} albums in this collection`);
  for (let eachAlbum of array) {
    console.log(`${eachAlbum.title} by ${eachAlbum.artist}, published in ${eachAlbum.yearPublished}`);
  } // end of for loop
} // end of showCollection function

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
