const fs = require('fs');

//write file function
//destination = file to write to
//content = contents which will go inside the file
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

 // read and append function
 // will initially read current data and append to it when necessary for data persistence
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, notes) => {
      if (err) {
        console.error(err);
      } else {
        const parsedNotes = JSON.parse(notes);
        parsedNotes.push(content);
        writeToFile(file, parsedNotes);
      }
    });
  };

  module.exports = { readAndAppend, writeToFile };