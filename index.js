function receivesAFunction(x) {
    x();
}

function returnsANamedFunction() {
    return function y() {
    };
}

function returnsAnAnonymousFunction() {
    return function() {
    };
}