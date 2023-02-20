function gcd_two_numbers(x, y) {
    while (x!=y){
        if (x>y){
            x-=y;
        }
        else{
            y-=x;
        }
    }
    console.log(x);
}

gcd_two_numbers(2154,458);