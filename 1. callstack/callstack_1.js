function three(){
    console.log('I love JS')
}

function two(){
    three();
}

function one(){
    two();
}

function zero(){
    one();
    throw Error("omg i'm an Error");
}

zero();