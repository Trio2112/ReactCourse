// Import a variable explicitly exported in the callee.
import { makeMeAvailable1, makeMeAvailable2 } from "./namedExportVariablesCallee.js";
console.log("NAMED VARIABLES");
console.log("makeMeAvailable1: " + makeMeAvailable1);
console.log("makeMeAvailable2: " + makeMeAvailable2);
console.log("");

// For convenience, you can also import multiple variables into an object.
import * as availableValues from "./namedExportVariablesCallee.js";
console.log("NAMED VARIABLES AS AN OBJECT");
console.log("availableValues.makeMeAvailable1: " + availableValues.makeMeAvailable1);
console.log("availableValues.makeMeAvailable1: " + availableValues.makeMeAvailable2);
console.log("");

// For convenience, you can also assign an alias to an imported value.
import { makeMeAvailable1 as myAlias1 }  from "./namedExportVariablesCallee.js";
console.log("NAMED VARIABLE AS ALIAS");
console.log("myAlias1: " + myAlias1);
console.log("");

// Import a variable exported with default in the callee.
// NOTE: No curly braces since this is a default value that's being exported.
import  defaultValue from "./defaultValueCallee.js";
import { namedExportAlongsideDefault } from "./defaultValueCallee.js";
console.log("DEFAULT AND NAME VARIABLE MIXED");
console.log("default value is: " + defaultValue);
console.log("namedExportAlongsideDefault: " + namedExportAlongsideDefault);
console.log();