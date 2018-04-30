/*jslint
    node
*/
const jslint = require("./jslint");
const fs = require("fs");
const fileName = process.argv[2];

fs.readFile(fileName, "utf-8", function (err, fileText) {
    "use strict";
    if (err) {
        throw err;
    }
    const lintedCode = jslint(fileText);
    if (lintedCode.ok === true) {
        console.log(fileName + " is okay.");
    }
    if (lintedCode.ok === false) {
        console.log(lintedCode.warnings);
    }
});
