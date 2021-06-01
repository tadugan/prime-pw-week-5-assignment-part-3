console.log('***** Music Collection *****')

// this variable stores the record objects we will create
let collection = [];

function addToCollection(title, artist, yearPublished) {
  console.log('in addToCollection');
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } // end of object declarations
  collection.push(record);
  return record;
} // end addToCollection

//testing addToCollection
addToCollection('White Blood Cells', 'The White Stripes', 1999)
