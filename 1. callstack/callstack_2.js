function three(){
    console.log('I love JS')
    throw Error("omg i'm an Error");

}

function two(){
    three();
}

function one(){
    two();
}

function zero(){
    one();
}

zero(); 