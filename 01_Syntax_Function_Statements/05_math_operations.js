function solve(x,y, operator){
    if (operator === '+'){
        console.log(x+y);
    } else if (operator === '-'){
        console.log(x-y);
    } else if (operator === '*'){
        console.log(x*y);
    } else if (operator === '/'){
        console.log(x/y);
    } else if (operator === '%'){
        console.log(x%y);
    } else if (operator === '**'){
        console.log(x**y);
    }
}

function solve (x,y, operator){
    switch (operator){
        case '+' : console.log(x+y); break;
        case '-' : console.log(x-y); break;
        case '*' : console.log(x*y); break;
        case '/' : console.log(x/y); break;
        case '%' : console.log(x%y); break;
        case '**' : console.log(x**y); break;
    }
}

solve(3,5.5,'*');
