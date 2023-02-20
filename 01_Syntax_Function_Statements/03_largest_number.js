function largest(x,y,z){
    let largest=0
    if (x>=y  && x>=z){
        largest=x;
    } else if (y>=x && y>=z){
        largest=y;
    }
    else {
        largest=z
    }
    console.log(`The largest number is ${largest}.`);
}

function maxNumber(...params){
    console.log(`The largest number is ${Math.max(...params)}.`);
}

maxNumber(5,-3,16);