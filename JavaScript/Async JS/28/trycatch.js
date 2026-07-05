// In Javascript, try and catch are keywords used to implement
// error handling. Error handling is essential when writing
// code to gracefully handle unexpected errors and exceptions
// that may occur during program execution. The try and 
// catch blocks work together to enable developers to catch
// and handle errors, preventing them from crashing the entire
// application.

function parseJSON(jsonString){
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log(`An error occured while parsing JSON: ${error.message}`);
        return null;
    }
}

const validJSON = `{"name":"Hamza","age": 19}`;
const result1 =parseJSON(validJSON);
console.log(result1);