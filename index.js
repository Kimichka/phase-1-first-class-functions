function receivesAFunction(sth) {return sth()}

function returnsANamedFunction() {function sth() {}return sth}

function returnsAnAnonymousFunction() {return function() {}}