function receivesAFunction(cbFunction){
    cbFunction();
}

function returnsANamedFunction(){
    return function withName(){};
}

function returnsAnAnonymousFunction(){
    return function (){};
}