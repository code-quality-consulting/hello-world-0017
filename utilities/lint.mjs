/*jslint
    node
*/
import jslint from "../dependencies/jslint";
import fs from "fs";

const fileNames = process.argv.slice(2);

fileNames.forEach(function(fileName){
    fs.readFile(fileName, "utf-8", function (err, fileText) {
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
});
