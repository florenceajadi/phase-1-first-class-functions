function receivesAFunction(callback) {
    callback()
    return "callback";
};


function returnsANamedFunction() {
function flosFunction() {
    return "Hello everyone!";
}
   return flosFunction;
};


function returnsAnAnonymousFunction() {
    return function () {
        return "Hello everyone!";
    }
}