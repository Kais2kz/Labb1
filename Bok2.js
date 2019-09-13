let csvToJson = require('convert-csv-to-json');

let fileInputName = 'Bok2.csv';
let fileOutputName = 'Bok2.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
