//Reading a Excel File in NodeJS and converting Worksheet Data to JSON
var XLSX = require('xlsx')

var workbook = XLSX.readFile('sample.xls');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);
